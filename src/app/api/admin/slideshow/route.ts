import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { imageUrl, altText, caption, linkUrl, sortOrder } = body;

    if (!imageUrl || !altText) {
      return NextResponse.json(
        { error: "Image URL and alt text are required" },
        { status: 400 }
      );
    }

    // Generate a fileId from the URL (for Google Drive compatibility)
    const fileId = imageUrl.includes("drive.google.com")
      ? extractGoogleDriveFileId(imageUrl)
      : imageUrl;

    const image = await prisma.slideshowImage.create({
      data: {
        fileId,
        imageUrl,
        altText,
        caption: caption || null,
        linkUrl: linkUrl || null,
        sortOrder: sortOrder ?? 0,
        isActive: true,
      },
    });

    return NextResponse.json(image);
  } catch (error) {
    console.error("Error creating slideshow image:", error);
    return NextResponse.json(
      { error: "Failed to create slideshow image" },
      { status: 500 }
    );
  }
}

function extractGoogleDriveFileId(url: string): string {
  // Try to extract file ID from various Google Drive URL formats
  const patterns = [
    /\/file\/d\/([^/]+)/,
    /id=([^&]+)/,
    /\/d\/([^/]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return url;
}

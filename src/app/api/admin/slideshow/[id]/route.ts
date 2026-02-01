import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const { isActive, altText, caption, linkUrl, sortOrder } = body;

    const updateData: {
      isActive?: boolean;
      altText?: string;
      caption?: string | null;
      linkUrl?: string | null;
      sortOrder?: number;
    } = {};

    if (isActive !== undefined) updateData.isActive = isActive;
    if (altText !== undefined) updateData.altText = altText;
    if (caption !== undefined) updateData.caption = caption;
    if (linkUrl !== undefined) updateData.linkUrl = linkUrl;
    if (sortOrder !== undefined) updateData.sortOrder = sortOrder;

    const image = await prisma.slideshowImage.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(image);
  } catch (error) {
    console.error("Error updating slideshow image:", error);
    return NextResponse.json(
      { error: "Failed to update slideshow image" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;

    await prisma.slideshowImage.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting slideshow image:", error);
    return NextResponse.json(
      { error: "Failed to delete slideshow image" },
      { status: 500 }
    );
  }
}

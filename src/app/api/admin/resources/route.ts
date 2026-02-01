import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, description, url, category } = body;

    if (!name || !url || !category) {
      return NextResponse.json(
        { error: "Name, URL, and category are required" },
        { status: 400 }
      );
    }

    // Get the highest sortOrder for this category
    const lastResource = await prisma.resource.findFirst({
      where: { category },
      orderBy: { sortOrder: "desc" },
    });

    const resource = await prisma.resource.create({
      data: {
        name,
        description: description || null,
        url,
        category,
        sortOrder: (lastResource?.sortOrder ?? -1) + 1,
        isActive: true,
      },
    });

    return NextResponse.json(resource);
  } catch (error) {
    console.error("Error creating resource:", error);
    return NextResponse.json(
      { error: "Failed to create resource" },
      { status: 500 }
    );
  }
}

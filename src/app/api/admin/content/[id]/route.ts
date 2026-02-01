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
    const { content } = body;

    if (typeof content !== "string") {
      return NextResponse.json(
        { error: "Content must be a string" },
        { status: 400 }
      );
    }

    const block = await prisma.contentBlock.update({
      where: { id },
      data: {
        content,
        lastEditedById: session.user.id,
      },
    });

    return NextResponse.json(block);
  } catch (error) {
    console.error("Error updating content block:", error);
    return NextResponse.json(
      { error: "Failed to update content block" },
      { status: 500 }
    );
  }
}

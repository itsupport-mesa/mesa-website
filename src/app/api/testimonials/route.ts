import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { testimonialSubmissionSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the input
    const result = testimonialSubmissionSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const {
      story,
      clientName,
      clientEmail,
      shareOnWebsite,
      shareOnFacebook,
      shareInNewsletter,
    } = result.data;

    // Create initials from name if provided
    let clientInitials: string | undefined;
    if (clientName) {
      const parts = clientName.trim().split(/\s+/);
      if (parts.length > 1) {
        clientInitials = parts.map((p) => p[0]).join("").toUpperCase();
      } else {
        clientInitials = clientName[0]?.toUpperCase();
      }
    }

    // Create the testimonial
    const testimonial = await prisma.testimonial.create({
      data: {
        story,
        clientName: clientName || null,
        clientEmail: clientEmail || null,
        clientInitials,
        shareOnWebsite,
        shareOnFacebook,
        shareInNewsletter,
        status: "PENDING",
      },
    });

    return NextResponse.json(
      { success: true, id: testimonial.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create testimonial:", error);
    return NextResponse.json(
      { error: "Failed to submit testimonial. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Only return approved testimonials that can be shared on website
    const testimonials = await prisma.testimonial.findMany({
      where: {
        status: "APPROVED",
        shareOnWebsite: true,
      },
      select: {
        id: true,
        story: true,
        displayName: true,
        clientInitials: true,
        imageUrl: true,
        imageAlt: true,
        featured: true,
        publishedAt: true,
      },
      orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

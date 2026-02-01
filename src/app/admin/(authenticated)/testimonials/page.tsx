import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { TestimonialList } from "@/components/admin/TestimonialList";

export const metadata: Metadata = {
  title: "Testimonials",
};

async function getTestimonials() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: [{ status: "asc" }, { submittedAt: "desc" }],
    include: {
      reviewedBy: {
        select: { name: true },
      },
    },
  });

  return testimonials;
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  const pending = testimonials.filter((t) => t.status === "PENDING");
  const approved = testimonials.filter((t) => t.status === "APPROVED");
  const rejected = testimonials.filter((t) => t.status === "REJECTED");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
        <p className="mt-1 text-gray-600">
          Review and moderate client testimonials
        </p>
      </div>

      <TestimonialList
        pending={pending}
        approved={approved}
        rejected={rejected}
      />
    </div>
  );
}

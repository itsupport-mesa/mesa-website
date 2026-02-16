import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Stories",
  description:
    "Read stories from Madison County residents whose lives have been touched by MESA's services.",
};

export const dynamic = "force-dynamic";

async function getApprovedTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: {
        status: "APPROVED",
        shareOnWebsite: true,
      },
      orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
    });
    return testimonials;
  } catch {
    return [];
  }
}

export default async function StoriesPage() {
  const testimonials = await getApprovedTestimonials();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Client Stories
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-blue-100">
            Real stories from our Madison County neighbors
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-mesa-cream py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
            Every day, MESA has the privilege of walking alongside our neighbors
            during challenging times. These stories, shared with permission,
            illustrate the impact of community support.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {testimonials.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className={`rounded-xl border bg-white p-8 shadow-sm ${
                    testimonial.featured
                      ? "border-mesa-gold md:col-span-2"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex gap-6">
                    {testimonial.imageUrl && (
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.imageAlt || "Client photo"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <Quote className="h-8 w-8 text-mesa-blue-200" />
                      <blockquote className="mt-4 text-gray-600">
                        {testimonial.story}
                      </blockquote>
                      <footer className="mt-4">
                        <p className="font-medium text-mesa-blue-700">
                          — {testimonial.displayName || testimonial.clientInitials || "A grateful neighbor"}
                        </p>
                      </footer>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <Quote className="mx-auto h-16 w-16 text-mesa-blue-200" />
              <p className="mt-6 text-lg text-gray-600">
                We&apos;re collecting stories from the community. Check back
                soon to read about how MESA has helped our neighbors.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA to submit */}
      <section className="bg-mesa-blue-700 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">
            Has MESA Helped You?
          </h2>
          <p className="mt-2 text-mesa-blue-100">
            Your story could inspire others and help us spread the word about
            our services.
          </p>
          <Link
            href="/stories/submit"
            className="mt-6 inline-block rounded-md bg-white px-8 py-3 text-lg font-semibold text-mesa-blue-700 hover:bg-mesa-blue-50"
          >
            Share Your Story
          </Link>
        </div>
      </section>
    </div>
  );
}

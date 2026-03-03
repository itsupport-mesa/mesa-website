import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { SlideshowManager } from "@/components/admin/SlideshowManager";

export const metadata: Metadata = {
  title: "Slideshow",
};

export const dynamic = "force-dynamic";

async function getSlideshowImages() {
  try {
    const images = await prisma.slideshowImage.findMany({
      orderBy: { sortOrder: "asc" },
    });
    return images;
  } catch {
    return [];
  }
}

export default async function SlideshowPage() {
  const images = await getSlideshowImages();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Homepage Slideshow</h1>
        <p className="mt-1 text-gray-600">
          Manage the images displayed in the homepage slideshow
        </p>
      </div>

      <SlideshowManager images={images} />
    </div>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideImage {
  id: string;
  imageUrl: string;
  altText: string;
  caption: string | null;
  linkUrl: string | null;
}

export function HomepageCarousel({ images }: { images: SlideImage[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (images.length === 0) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl bg-mesa-blue-50 p-8">
        <p className="text-gray-500">Community photos coming soon.</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image) => {
            const slide = (
              <div key={image.id} className="relative min-w-0 flex-[0_0_100%]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.imageUrl}
                    alt={image.altText}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {image.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-sm text-white">{image.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            );

            if (image.linkUrl) {
              return (
                <a
                  key={image.id}
                  href={image.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 flex-[0_0_100%]"
                >
                  {slide}
                </a>
              );
            }
            return slide;
          })}
        </div>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md transition-colors hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md transition-colors hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

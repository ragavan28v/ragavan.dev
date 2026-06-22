import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ slides, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return undefined;

    const update = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setSnapCount(emblaApi.scrollSnapList().length);
    };

    update();
    emblaApi.on('select', update);
    emblaApi.on('reInit', update);

    // Autoplay interval
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
      clearInterval(autoplay);
      emblaApi.destroy();
    };
  }, [emblaApi]);

  return (
    <div className="min-w-0">
      <div className="relative overflow-hidden rounded-xl border border-theme bg-card">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={`${title}-${index}`} className="min-w-0 flex-[0_0_100%]">
                <div className="aspect-video w-full">
                  <img
                    src={slide}
                    alt={`${title} screenshot ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-theme bg-white/80 text-secondary backdrop-blur-sm transition-colors duration-150 hover:text-primary dark:bg-card/80"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-[18px] w-[18px]" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-theme bg-white/80 text-secondary backdrop-blur-sm transition-colors duration-150 hover:text-primary dark:bg-card/80"
          aria-label="Next slide"
        >
          <ChevronRight className="h-[18px] w-[18px]" />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {Array.from({ length: snapCount }).map((_, index) => (
          <button
            key={`${title}-dot-${index}`}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`rounded-full transition-all duration-150 ${
              selectedIndex === index ? 'h-1.5 w-5 bg-accent' : 'h-1.5 w-1.5 bg-theme'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

interface ImageType {
  src: string;
  alt: string;
  type: string; // Add a type property for handling different image types
}

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const CAROUSELIMG: ImageType[] = [
    {
      src: "/images/carousel/gambar1.png",
      alt: "gambar1",
      type: "png",
    },
    {
      src: "/images/carousel/gambar2.png",
      alt: "gambar2",
      type: "png",
    },
    {
      src: "/images/carousel/gambar3.png",
      alt: "gambar3",
      type: "png",
    },
    {
      src: "/images/carousel/gambar4.jpg",
      alt: "gambar4",
      type: "jpg",
    },
    // Add more images with different types as needed
  ];

  const [selectedImage, setSelectedImage] = React.useState<ImageType | null>(
    null
  );

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-lg"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {CAROUSELIMG.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="m-10">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {img.type === "svg+xml" ? (
                      <img
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={400}
                        onClick={() => handleImageClick(img)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={400}
                        height={400}
                        onClick={() => handleImageClick(img)}
                        className="cursor-pointer"
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3/4">
            {selectedImage.type === "svg+xml" ? (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="cursor-pointer"
              />
            ) : (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

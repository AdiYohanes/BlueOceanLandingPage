/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const imageUrls = [
  "/images/carousel/gambar1.png",
  "/images/carousel/gambar2.png",
  "/images/carousel/gambar3.png",
  "/images/carousel/gambar4.jpg",
];

const Galery = () => {
  return (
    <div className="container mx-auto px-5 py-2">
      <div className="flex flex-wrap md:-m-2">
        {imageUrls.map((url, index) => (
          <div key={index} className="p-5">
            <Image alt="gallery" src={url} width={300} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;

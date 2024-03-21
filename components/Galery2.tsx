/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const imageUrls = [
  "/images/carousel2/1.png",
  "/images/carousel2/2.png",

];

const Galery2 = () => {
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

export default Galery2;

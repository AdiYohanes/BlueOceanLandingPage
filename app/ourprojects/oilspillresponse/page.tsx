/* eslint-disable @next/next/no-img-element */
import React from "react";

// Define constant for the image source
const imageSource = "/images/oilspill/";

const OilSpill: React.FC = () => {
  return (
    <div className="container mx-auto px-4 m-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar1.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar2.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar3.jpg`}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar4.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar5.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar6.jpg`}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar7.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar8.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar9.jpg`}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar10.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar11.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${imageSource}gambar12.jpg`}
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="p-20">
    <video className="h-full w-full rounded-lg" controls autoPlay>
      <source src={`${imageSource}video1.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  </div>
  );
};

export default OilSpill;

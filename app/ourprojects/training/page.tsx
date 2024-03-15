/* eslint-disable @next/next/no-img-element */
import React from "react";

// Define constant for the image source
const imageSource = "/images/training/";

const Training: React.FC = () => {
  return (
    <div className="container mx-auto px-4 m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 m-5 pb-10 gap-4">
        <div className="flex items-center justify-center">
          <h2 className="text-6xl font-semibold text-center">Training</h2>
        </div>
        <div>
          <p className="indent-20 text-lg leading-relaxed text-gray-600 text-justify mb-5">
            When a ship spills oil, it is very important for the crew to
            understand how to deal with the oil spill quickly and properly. This
            program has been designed to complete and how to assess risk, how to
            safely clean up chemicals and in the work environment, and how to
            decontaminate.
          </p>
          <p className="indent-20 text-lg leading-relaxed text-gray-600 text-justify mb-5">
          The program will address the important safety precautions when dealing with oil spills and delegates should fully understand oil and chemical spill safety precautions in marine and coastal environments and how to protect themselves before attending to such spills.
          </p>
        </div>
      </div>
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
              src={`${imageSource}gambar4.jpeg`}
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
              src={`${imageSource}gambar6.jpeg`}
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
              src={`${imageSource}gambar8.jpeg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}gambar9.jpeg`}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}gambar10.jpeg`}
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
              src={`${imageSource}gambar12.jpeg`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;

/* eslint-disable @next/next/no-img-element */
import React from "react";

// Define constant for the image source
const imageSource = "/images/assessment/";

const Assessment: React.FC = () => {
  return (
    <div className="container mx-auto px-4 m-10">
      <div className="grid grid-cols-1 m-5 pb-10 gap-8">
        <div className="flex items-center justify-center">
          <h2 className="text-6xl font-semibold text-center tracking-wider">
            Assessment
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}1.jpg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}2.jpeg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}3.jpg`}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}4.jpg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}5.jpg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}6.jpg`}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}7.jpg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}8.jpg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}9.jpg`}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}10.jpg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}11.jpeg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}12.jpeg`}
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

export default Assessment;

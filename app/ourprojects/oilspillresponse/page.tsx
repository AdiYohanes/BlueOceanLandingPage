/* eslint-disable @next/next/no-img-element */
import { GlobeIcon } from "lucide-react";
import React from "react";

// Define constant for the image source
const imageSource = "/images/oilspill/";

const OilSpill: React.FC = () => {
  return (
    <div className="container mx-auto px-4 m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 m-5 pb-10 gap-4">
        <div className="flex items-center justify-center">
          <h2 className="text-6xl font-semibold text-center">
            Oil Spil Response
          </h2>
        </div>
        <div>
          <p className="indent-20 text-lg leading-relaxed text-gray-600 text-justify mb-5">
            Blue Ocean Sejahtera is fully committed to continuously improve the
            level services provided, search the latest technology, knowledge and
            practicability that could leverage the competitiveness. Would like
            to take our business partners closer to us, whenever issue with
            environment protection, Blue Ocean Sejahtera is within business
            partners’ reach. Blue Ocean Sejahtera is believed that to be a
            leading and innovative in this competitive edge, we looking forward
            to develop:
          </p>
          <ul className="space-y-5">
            <li>
              <GlobeIcon className="inline-block w-4 h-4" />
              <span className="ml-4">
                Research and Development, the energy for searching and
                development most reliable and effective equipment is our value.
              </span>
            </li>
            <li>
              <GlobeIcon className="inline-block w-4 h-4" />
              <span className="ml-4">
                Share, collective thinking is most priceless asset and therefore
                we are widely open to our business partners and facilitating
                sharing sessions.
              </span>
            </li>
            <li>
              <GlobeIcon className="inline-block w-4 h-4" />
              <span className="ml-4">
                Collaboration, working together with our business partners and
                stakeholders to enrich Blue Ocean Sejahtera knowledge and ensure
                the robustness of our services in managing environment
                protection
              </span>
            </li>
          </ul>
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

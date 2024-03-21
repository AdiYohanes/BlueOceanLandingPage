"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import React from "react";

// Define constant for the image source
const imageSource = "/images/OilBoom/";

const OilBoom: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="flex py-10">
      <h2 className="text-4xl font-bold text-blue-800">Oil Boom</h2>
      </div>

      <div className="flex flex-col m-10 p-10 shadow-md rounded-md gap-5 w-auto h-auto">
        <h2>
          <span className="text-3xl font-semibold text-blue-800">
            P-70 HEAVY DUTY OIL BOOM
          </span>
        </h2>
        <div className="flex gap-10">
          <Image
            src="/images/oilboom/gambar1.png"
            alt="oilboom"
            width={300}
            height={300}
            className="rounded-md"
          />
          <p className="indent-10 text-lg leading-relaxed text-gray-600 text-justify mb-5">
            OSPICO OP-70 Oil Boom is suitable for permanent and or
            semi-permanent deployment to recover oil spill.The ballast, anchor
            point, connectors, bolts, and nuts are all made from non-corrosive
            and salt water re-sistant materials to ensure the longevity its
            parts. Each part can be repaired separately due to the
            de-tachability of the float and ballast. Separates waste and oil
            spill. A highly effective water pollution control designed for
            permanent deployment in locations with a risk of spill or for
            emergency response situation.
          </p>
        </div>
      </div>

      <div className="flex flex-col m-10 p-10 shadow-md rounded-md gap-5 w-auto h-auto">
        <h2>
          <span className="text-3xl font-semibold text-blue-800">
            OPSK-70 EMERGENCY OIL BOOM
          </span>
        </h2>
        <div className="flex gap-10">
          <Image
            src="/images/oilspill.jpg"
            alt="oilboom"
            width={300}
            height={300}
            className="rounded-md"
          />
          <p className="indent-10 text-lg leading-relaxed text-gray-600 text-justify mb-5">
            OSPICO OPSK-70 Oil Boom is designed for in-shore and bay operation.
            It is suitable for emer-gency deployment to localize oil spill. The
            float is made from polyurethane foam sealed inside reinforced
            polyester with abrasion re-sistance properties and handgrips
            attached to it. The skirt contains UV resistance properties and is
            easy to clean.
          </p>
        </div>
      </div>
      <div className="flex flex-col m-10 p-10 shadow-md rounded-md gap-5 w-auto h-auto">
        <h2>
          <span className="text-3xl font-semibold text-blue-800">INFLATABLE OIL BOOM</span>
        </h2>
        <div className="flex gap-10">
          <Image
            src="/images/oilboom/gambar2.png"
            alt="oilboom"
            width={300}
            height={300}
            className="rounded-md"
          />
          <p className="indent-10 text-lg leading-relaxed text-gray-600 text-justify mb-5">
            The OSPICO Inflatable Boom is designed for harbor, bay, and any
            protected water locations. Its opera-tion is very practical and
            suitable for emergency and semi-permanent deployment either from
            stor-age area or from the OSPICO Inflatable Boom Reel. Its draft and
            freeboard length will ensure that no oil passes through the
            Inflatable Boom. The OSPICO Inflatable Boom is classified into 4
            types: OSIB 70, OSIB 100, OSIB 150, and OSIB 200.
          </p>
        </div>
      </div>
      <div className="flex flex-col m-10 p-10 shadow-md rounded-md gap-5 w-auto h-auto">
        <h2>
          <span className="text-3xl font-semibold text-blue-800">REEL BOOM</span>
        </h2>
        <div className="flex gap-10">
          <Image
            src="/images/oilboom/gambar3.jpg"
            alt="oilboom"
            width={300}
            height={300}
            className="rounded-md"
          />
          <p className="indent-10 text-lg leading-relaxed text-gray-600 text-justify mb-5">
            OSPICO Oil Boom Reel is used for the storage and deployment of the
            OSPICO Inflatable Boom series. The reels are available in various
            sizes to accommodate the whole inflatable boom series. Standard
            reels are hydraulic driven with forklift pockets and lifting eyes
            for convenient positioning on docks, vessels, trailers, or at the
            spill site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OilBoom;

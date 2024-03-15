/* eslint-disable @next/next/no-img-element */
import React from "react";

// Define constant for the image source
const imageSource = "/images/designManufacturing/";

const DesignManufacturing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 m-5 pb-10 gap-8">
        <div className="flex items-center justify-center">
          <h2 className="text-6xl font-semibold text-center tracking-wider">
            Design & Manufacturing
          </h2>
        </div>
        <div>
          <p className="indent-20 text-sm md:text-lg leading-relaxed text-gray-600 text-justify mb-5">
            Boom and skimmer are mechanical techniques in Oil Spill Response and
            Recovery (OSRR) that collect oil from the water surface. However,
            there are several drawbacks of using boom and skimmer, such as the
            oil could pass over the boom during strong wind and high tides.
            Moreover, the currently available oil skimmer designed by the
            engineers is heavy-duty; in consequence, it is ineffective in
            shallow water.
          </p>
          <p className="indent-20 text-sm md:text-lg leading-relaxed text-gray-600 text-justify mb-5">
            Thus, there is a need to develop a portable oil spill skimmer to
            complement the current drawbacks. Several journals on the
            fabrication of the oil spill skimmer were reviewed. Findings from
            literature shows that the development of oil spill skimmer lacks
            user requirements when designing a portable oil spill skimmer.
          </p>
        </div>
      </div>
      <div className="flex m-5">
        <p className="indent-20 text-sm md:text-lg leading-relaxed text-gray-600 text-justify mb-5">
          This article provides a systematic review of Kansei Engineering and
          the Analytical Hierarchy Process in the product development process.
          Therefore, Kansei Engineering and Analytical Hierarchy Process (AHP)
          can be incorporated in the early stage of designing a portable oil
          spill skimmer. This paper also includes the application of Kansei
          Engineering and AHP in design research articles. Findings from
          observed articles indicate a lack of design and development
          technologies relating to products for environmental protection; the
          AHP and Kansei Engineering application is somewhat lacking. Moreover,
          the fabrication of an oil spill skimmer focuses more on technical
          specifications and includes fewer user requirements. As a result, the
          characteristics such as ease of use, robustness, and safety cannot be
          evaluated. The AHP and Kansei Engineering methodology can be extended
          to the design and manufacture of products for environmental
          protection.
        </p>
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
              src={`${imageSource}2.jpg`}
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
              src={`${imageSource}11.jpg`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${imageSource}12.jpg`}
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

export default DesignManufacturing;

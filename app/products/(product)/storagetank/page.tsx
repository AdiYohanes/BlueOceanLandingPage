import CarouselGallery from "@/components/CarouselGallery";
import React from "react";

const IMAGES = [
  {
    src: "/images/storagetank/image1.png",
    alt: "image",
  },
  {
    src: "/images/storagetank/image2.png",
    alt: "image",
  },
  {
    src: "/images/storagetank/image3.jpg",
    alt: "image",
  },
];

const StorageTank = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 py-5 px-4 gap-20">
      <div className="text-center p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-4xl font-bold text-blue-800">Storage Tank</h2>
      </div>

      <div className="flex flex-wrap gap-8 w-[1000px] sm:w-auto md:w-auto">
        <div className="text-center p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-800 sm:text-xl mb-8">
            OSPICO FLOATING TEMPORARY STORAGE TANK
          </h3>
          <p className="text-gray-700 leading-relaxed">
            OSPICO Floating Storage Tang are collapsible storage containers that
            provide temporary as well as long term liquid storage. Our pillow
            tanks can used for portable (drinking) water, fruit jices,
            wasterwater, chemicals, Spill Response and more.
          </p>
        </div>

        <div className="text-center p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-800 sm:text-xl mb-8">
            OSPICO PORTABLE TANK OT-8T
          </h3>
          <span className="text-gray-700 leading-relaxed">
            Portable Water, Chemical or Fuel Portable Storage Tank:
          </span>
          <p className="text-gray-700 leading-relaxed">
            Self-supporting and collapsible industrial fabric tanks designed for
            temporary containment of drinking water, fire fighting water,
            chemical or fuel containment. The urethane fabric that is used meets
            all requirements for use in containing products for human
            consumption if purchased with cover.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full pt-8 gap-10">
        <h3 className="text-4xl font-bold text-blue-800">
          Storage Tank Gallery
        </h3>
        <CarouselGallery images={IMAGES} /> 
      </div>
    </section>
  );
};

export default StorageTank;

"use client";
import Galery from "@/components/Galery";
import { Carousel } from "@/components/ui/carousel";
import React from "react";

const CONTENT = [
  {
    title: "Skimmer Vacuum Truck",
    description:
      "SVT-3000 is constructed on a Mitsubishi chassis and engine with a gross weight of 8.5 tons. The tank is made of mild steel or stainless steel with a capacity of 3000 liters. The truck tank is equipped with a side glass to help monitor liquid level. Trash and debris screen installation inside the tank is optional.",
  },
  {
    title: "Skimmer System",
    description:
      "The three types of light weight skimmer heads are not more than 42 kgs each, making them all portable, easy to deploy operate and maintain. Each skimmer is unique to suit different aras and oil spill. All three will be installed on board of the truck for rapid deployment..",
  },
];

const galery = [
  {
    src: "/images/carousel/gambar1.png",
    alt: "gambar1",
  },
  {
    src: "/images/carousel/gambar2.png",
    alt: "gambar2",
  },
  {
    src: "/images/carousel/gambar3.png",
    alt: "gambar3",
  },
  {
    src: "/images/carousel/gambar4.jpg",
    alt: "gambar4",
  },
];
const page = () => {
  return (
    <section className="flex flex-wrap justify-center items-center bg-gray-100 py-12 px-4">
      <div className="text-center p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-4xl font-bold text-blue-800">Vaccum Truck</h2>
      </div>
      <div className="flex m-5">
        <p className="text-gray-700 leading-relaxed text-xl">
          OSPICO Skimmer Vacuum Truck SVT-3000 is designed for refinery and gas
          stations. The Skimmer Vacuum Truck should be manufactured according to
          ISO 9001:2000 procedures. It is equipped with 3000 liters storage tank
          and emergency boom for oil recovery there area three types of skimmers
          for vairous types of oil and situations, those are, Disc skimmer Head,
          Mini Weir Skimmer head, and Delta Mantaray skimmer head.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
        {CONTENT.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-2xl text-blue-800 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <h2 className="text-4xl font-bold text-blue-800">Galery</h2>{" "}
      </div>
      <div className="flex items-center justify-center w-full ">
        <Galery />
      </div>
    </section>
  );
};

export default page;

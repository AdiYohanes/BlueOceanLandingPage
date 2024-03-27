import CarouselGallery from "@/components/CarouselGallery";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WasteWaterPage = () => {
  const GAMBAR = [
    {
      src: "/images/waste-water/1.png",
      alt: "image",
    },
    {
      src: "/images/waste-water/2.png",
      alt: "image",
    },
    {
      src: "/images/waste-water/3.png",
      alt: "image",
    },
    {
      src: "/images/waste-water/4.png",
      alt: "image",
    },
    {
      src: "/images/waste-water/5.png",
      alt: "image",
    },
    {
      src: "/images/waste-water/6.png",
      alt: "image",
    },
    {
      src: "/images/waste-water/7.png",
      alt: "image",
    },
    {
      src: "/images/waste-water/8.png",
      alt: "image",
    },
  ];
  return (
    <section className="flex flex-col bg-gray-100 py-12 px-4">
      <div className="text-center p-6">
        <div>
          <h2 className="text-4xl font-bold text-blue-800 mb-2">
            Waste Water Treatment Plant (WWTP)
          </h2>
          <hr className="w-[200px] h-[2px] bg-slate-500 mx-auto" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex p-6 gap-8">
          <h3 className="text-2xl font-semibold text-blue-400 bg-slate-200 px-4 rounded-r-xl flex-shrink-0">
            General Description
          </h3>
        </div>
        <div className="grid grid-cols-2 p-6 gap-8">
          <p className="text-gray-700 leading-relaxed">
            Oil and Gas Drilling activities create quantities of contaminated
            water known as drilling waste water from the well. Waste water from
            well drilling sites may cause water polution and violate of the
            government standards (PERMENLH No. 19/2010). Drilling wastewaters
            contain many unwanted chemicals, sediment, mud, foam, oil & grase
            and other additives that can pollute a stream or river, wetlands,
            channel or fresh water wells. Therefore, with WWTP of PT. Blue Ocean
            Sejahtera the wastewaters must be treated and control the discharge
            of the water produce based on the government standards. Prevention
            of treatment of wastewater and sludge from drilling activities using
            the combination of primary and secondary treatment which consist of
            chemical process and sedimentation & screening process.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex p-6 gap-8 h-[85px]">
          <h3 className="text-2xl font-semibold text-blue-400 bg-slate-200 px-4 rounded-l-xl flex-shrink-0">
            DATASHEET
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <Image
          src="/images/waste-water/gambar1.png"
          alt="pdf"
          width={500}
          height={500}
        />
        <Image
          src="/images/waste-water/gambar2.png"
          alt="pdf"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-center">
        <Link href="/waste-water.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-400 hover:bg-blue-200 hover:underline mt-4">
            Download
          </Button>
        </Link>
      </div>
      <div className="flex justify-center pt-10">
        <CarouselGallery images={GAMBAR} />
      </div>
    </section>
  );
};

export default WasteWaterPage;

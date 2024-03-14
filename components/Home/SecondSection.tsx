'use client'
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import ModalVideo from "../ModalVideo";
import { motion } from "framer-motion";


const imageData = [
  {
    src: "/images/oilspill.jpg",
    alt: "Oil Spill Response",
    title: "Oil Spill Response",
    description:
      "  Blue Ocean Sejahtera is fully committed to continuously improve the level services provided, search the latest technology, knowledge and practicability that could leverage the competitiveness.",
    path: "/ourprojects/oilspillresponse",
  },
  {
    src: "/images/training.png",
    alt: "Training",
    title: "Training",
    description:
      "   When a ship spills oil, it is very important for the crew to understand how to deal with the oil spill quickly and properly.",
    path: "/oilspillresponse",
  },
  {
    src: "/images/design.jpg",
    alt: "Design & Manufacturing",
    title: "Design & Manufacturing",
    description:
      " Boom and skimmer are mechanical techniques in Oil Spill Response and Recovery (OSRR) that collect oil from the water surface. ",
    path: "/oilspillresponse",
  },
  {
    src: "/images/assesment.jpg",
    alt: "Assessment",
    title: "Assessment",
    description: "",
    path: "/oilspillresponse",
  },
];
const SecondSection = () => {
  return (
    <section className="bg-slate-100 bg-opacity-70">
      <div className="flex justify-center pt-5">
        <h1 className="font-semibold text-5xl">Our Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 m-20">
        {imageData.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="mx-3 mt-6 flex items-start rounded-lg bg-white shadow-md dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 transition-transform duration-300"
          >
            <a href="#!" className="block w-1/2">
              <Image
                className="rounded-t-lg"
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
              />
            </a>
            <div className="p-6 w-1/2">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {image.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-justify hidden md:block">
                {image.description}
              </p>

              <div className="mt-auto">
                <a href={image.path} className="inline-block">
                  <Button>Read More</Button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl font-extrabold text-gray-900 leading-tight tracking-wide mb-8">
          THE QUICK WE ACT, THE PERFECT WE GIVE & GET
        </h1>
        <div className="flex flex-col md:flex-row justify-center">
          <ModalVideo
            videoSource="/videos/video1.mp4"
            thumbnail="/images/oilspill.jpg"
          />
          <ModalVideo
            videoSource="/videos/video2.mov"
            thumbnail="/images/training.png"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

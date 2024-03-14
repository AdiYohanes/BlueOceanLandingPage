"use client";
import Image from "next/image";
import React from "react";
import TypewriterEffect from "./typing";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SingleImageProps {
  href: string;
  imgSrc: string;
  Alt: string;
}

const SingleImage: React.FC<SingleImageProps> = ({ href, imgSrc, Alt }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.a
      href={href}
      className="mx-4 my-2 flex w-[100px] h-[100px] items-center justify-center 2xl:w-[200px] 2xl:h-[200px] hover:shadow-lg transition duration-300 p-2 rounded-xl"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
    >
      <div className="w-full h-full relative">
        <Image src={imgSrc} alt={Alt} layout="fill" objectFit="contain" />
      </div>
    </motion.a>
  );
};


const Brand: React.FC = () => {
  return (
    <>
      <section className="bg-white py-20 dark:bg-dark lg:py-[100px]">
        <div className="container mx-auto text-center">
          <TypewriterEffect
            words={[{ text: "Our" }, { text: "Partner" }]}
            className="my-custom-class"
            cursorClassName="my-cursor-class"
            animationDuration={0.3}
            animationDelay={0.2}
          />
          <div className="flex flex-wrap -mx-4 justify-center">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/astra.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/exxon.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/gawi.jpg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/hcml.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/ibt.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/itm.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/ol.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/prima.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/shell.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/spc.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/thaca.jpg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/tppi.jpg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/vopak.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/images/partnerts/wilmar.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;

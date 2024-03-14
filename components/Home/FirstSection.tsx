"use client";

import React from "react";
import CountUp from "react-countup";

const FirstSection = () => {
  const backgroundImage = ["/images/bghero.jpg"];
  return (
    <section className="mb-20 overflow-hidden">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px]"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h2 className="mt-20 text-lg md:text-xl lg:text-2xl">
                ONE STOP SOLUTION FOR ANY OIL SPILL PROBLEMS.
              </h2>
              <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                A Trusted Business Partner <br />
                Committed to Protect <br />
                <span>Environment</span>
              </h1>
              <a
                className="mb-2 md:mb-0 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/contactus"
                role="button"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="flex justify-center mt-2 mb-2">
        <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden w-full">
          {/* Adjust the padding to increase the size of the box */}
          <div className="px-8 py-10 sm:px-10">
            <dl className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-4 text-4xl md:text-5xl font-extrabold">
                  <CountUp start={0} end={10} duration={2.75} />+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Clients
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-4 text-4xl md:text-5xl font-extrabold">
                  <CountUp start={0} end={50} duration={2.75} />+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Projects
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-4 text-4xl md:text-5xl font-extrabold">
                  <CountUp start={0} end={100} duration={2.75} />+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Organizations
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

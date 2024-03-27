"use client";

import Galery2 from "@/components/Galery2";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const DispersanPump = () => {
  return (
    <section className="block justify-center items-center bg-gray-100 py-12 px-4">
      <div className="text-center p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-4xl font-bold text-blue-800">
          OSPICO Dispersant Pump
        </h2>
      </div>

      <div className="grid grid-cols-2 m-5 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed text-xl indent-10">
            Oil spill dispersant spray systems are portable lightweight sets
            that can be quickly and easily mounted on tugs, offshore supply
            vessels and other pollution control craft responding to marine
            emergency oil spill situations. “ We couldn’t believe how much time
            we have saved by using this system, we have never seen pump
            performance like this on a dispersant set. Self-priming, super
            suction and it can run dry for hours without damage, let alone how
            easy it is to maintain, superb.” The above oil spill dispersant
            spray system consists of a self priming positive displacement pump,
            prime mover, dispersant flowmeter and interconnecting pipework, all
            mounted on an aluminum frame.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-xl leading-relaxed">
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 pt-5">
            <li className="flex items-center">1. Open sea or inshore duty</li>
            <li className="flex items-center">
              2. Suitable for below- or above-deck mounting mounting
            </li>
            <li className="flex items-center">3. Diesel or electric drive</li>
            <li className="flex items-center">4. Three standard units</li>
            <li className="flex items-center">
              5. Self priming with powerful suction performance
            </li>
            <li className="flex items-center">
              6. Will not be damaged if left running with a dry suction
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 leading-relaxed text-xl indent-10 pt-5">
          Oil dispersant consumption is appreciably reduced by using Megator oil
          dispersant spray systems. With its outstanding self-priming and
          dry-running capability, the Megator oil spill dispersant spray system
          can be stopped after the first run through an oil slick and then
          simply restarted for the second pass without the worry of loss of
          prime.
        </p>
      </div>

      <div className="flex items-center justify-center pb-5 mt-20 shadow-sm">
        <span className="text-2xl font-semibold tracking-widest">
          DATASHEET
        </span>
      </div>
      <div className="flex items-center justify-center m-5 gap-10">
        <Image src="/images/pdf1.png" alt="pdf" width={700} height={700} />
        <Link
          //   style={{buttonVariants}}
          href="/ospico-Dispersent.pdf"
          target="_blank"
          rel="noopene noreferrer"
        >
          <Button className="bg-blue-400 hover:bg-blue-200 hover:underline">
            Download
          </Button>
        </Link>
      </div> 
      <div className="block items-center justify-items-center pt-10">
        <div className="flex items-center justify-center w-full">
          <h2 className="text-4xl font-bold text-blue-800">Galery</h2>{" "}
        </div>
        <div className="flex items-center justify-center w-full pt-10">
          <div className="flex flex-col items-center justify-center">
            <Galery2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DispersanPump;

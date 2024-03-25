import { Dot } from "lucide-react";
import React from "react";

const Absorbent = () => {
  return (
    <section className="flex flex-wrap justify-center items-center bg-gray-100 py-12 px-4">
      <div className="text-center p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-4xl font-bold text-blue-800">Absorbent</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-2xl text-blue-800 mb-4">
            General Description
          </h3>
          <p className="text-gray-700 leading-relaxed mt-4 indent-5">
            Absorbents are inoluble materials or mixtures of materials used to
            recover liquids through the mechanism of absorption, or adsorption,
            or both. Absorbents are materials that pick up and retain liquid
            distributed throught ist molecular structure causing the solid to
            swell (50 percent or more).
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 indent-5">
            The absorbent mus be at least 70 percent insoluble in excess fluid.
            Absorbents are insoluble materials that are coated by a liquid on
            its surface, including pores and capillaries, without the solid
            swelling more than 50 percent in excess liquid. To be useful in
            combating oil spills, sorbents need to be both oleophilic
            (oil-attracting)and hydropobic (water-repellent).
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="text-gray-700 leading-relaxed space-y-5">
            <li className="font-semibold flex">
              <Dot />
              Leak - Resistant Solution
            </li>
            <li className="font-semibold flex">
              <Dot />
              Soft Absorbent Recycleds
            </li>
            <li className="font-semibold flex">
              <Dot />
              Higher performance
            </li>
            <li className="font-semibold flex">
              <Dot />
              Lower costs
            </li>
            <li className="font-semibold flex">
              <Dot />
              Greater price stability
            </li>
            <li className="font-semibold flex">
              <Dot />
              Less dependence on oil-based products
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-2xl text-blue-800 mb-4">
            Availability
          </h3>
          <ul className="text-gray-700 leading-relaxed">
            <li>MAT: size 43cm x 48cm, 100 pieces, weight 4.1kg</li>
            <li>PAD: size 43cm x 48cm, 100 pieces, weight 4.7kg</li>
            <li>PILLOW : size 35cm x 50cm, 10 pieces, weight 6.8kg</li>
            <li>BOOM: size 9.5cm x 240cm, 6 pieces, weight 9kg</li>
            <li>ROLL: size 48cm x 30m, 2 pieces, weight 5.8kg</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Absorbent;

import React from "react";

const CONTENT = [
  {
    title: "RESPONSE BOAT ORB-300",
    description:
      "OSPICO Response Boat are especially designed for combating oil spill in coastal, harbor and estuarial location. It can used to tow oil boom. OSPICO RB 40 also suitable for water inspection and monitoring deployment of oil boom closely. OSPICO RB 40 is powered by an outbourd and the power of system. All OSPICO RB 40 are extremely strong with a vee hull and lateral support to ensure comfort safety in most of sea conditions.",
  },
  {
    title: "RESPONSE BOAT ORB-420",
    description:
      "OSPICO Response Boat are especially designed for combating oil spill in coastal, harbor and estuarial location. It can used to tow oil boom. OSPICO RB 40 also suitable for water inspection and monitoring deployment of oil boom closely. OSPICO RB 40 is powered by an outbourd and the power of system. All OSPICO RB 40 are extremely strong with a vee hull and lateral support to ensure comfort safety in most of sea conditions.",
  },
  {
    title: "RESPONSE BOAT ORB-600",
    description:
      "OSPICO Response Boat are especially designed for combating oil spill in coastal, harbor and estuarial location. It can used to tow oil boom. OSPICO RB 40 also suitable for water inspection and monitoring deployment of oil boom closely. OSPICO RB 40 is powered by an outbourd and the power of system. All OSPICO RB 40 are extremely strong with a vee hull and lateral support to ensure comfort safety in most of sea conditions.",
  },
  {
    title: "RESPONSE BOAT ORB-900",
    description:
      "The 12 person ORB HEAVY DUTY is suitable for diving, assaul anda reconnaissance roles. Able to withstand the most demanding conditions and having a large aluminium dect to carry exceptional loads (up to 1250kg), these craft, able to take up to 160hp outboard, as specified by military and commercial users.",
  },
];
const page = () => {
  return (
    <section className="flex flex-wrap justify-center items-center bg-gray-100 py-12 px-4">
      <div className="text-center p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-4xl font-bold text-blue-800">Response Boat</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {CONTENT.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-2xl text-blue-800 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;

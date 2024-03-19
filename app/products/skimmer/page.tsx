import React from "react";

const CONTENT = [
  {
    title: "OSSKIM ODS -10T",
    description:
      "The OSSKIM ODS 10T is a disc skimmer designed to overcome oil spill at territorial water with a small water current or Zero Emission Zones (diesel free op-erations). It is suitable for both perma-nent and emergency opera-tions. Disc rotation speed is adjusta-ble depending on the amount of oil spill and is controlled from the hydraulic power pack with diesel activator. It lifts oil by 98% with a capaci-ty of 10 ton/hour.",
  },
  {
    title: "OSSKIM ODS-15T",
    description:
      "OSSKIM 0DS 15-T is lightweight and robust with minimal moving parts which allows it to be easily deployed with a single operator. The skimming modules are easily changed from disc to brush and has the ability to recover oil at a rate of up to 15 tons/hour with a very low water pick up rate of less than 2 per-cent despite it being the lightest skimmer in its class. OSSKIM ODS 15-T uses 4 floats and 4 oil lifters positioned to have a large enough capacity it is able to over-come spill even in Zero Emission Zones. It has an adjustable disc rotation speed which is configured from the hydraulic diesel power pack. Its power pack is designed to be mo-bile as well as suitable for permanent setup..",
  },
  {
    title: "OSSKIM OWS 30-T",
    description:
      "OSSKIM OWS 30-T can be used to lift all types of oil from ports, rivers, territorial water, and coast in a large quantity. 3 floats are used to balance the draft of the skimmer. The float and hover draft automatically adjusts itself to accommodate various thickness of the spill on the water surface. The OSPICO Power Pack is used to supply hydraulic power to the OSSKIM skim-mers or other equipment. The power pack features an instrument panel with a hand starter (electric starter also available for hazardous conditions).",
  },
  {
    title: "OSSKIM OMS 100-T",
    description:
      "OSKIMM OMS 100-T is a skimmer with advanced technology. The circular brush design has been devel-oped through years of re-search, and supported by the unique drive train and com-bined mechanism. The OMS-100T circular design is con-sidered to be better than the square or rectangular design, it allows the heavy and thick oils to flow well on the brush from any angle.",
  },
  {
    title: "OSSKIM OWS 100-T",
    description:
      "OSSKIM OWS 100-T is a special section of the skimmer that connected with a weir and a pump. It is available in 5 size ranged from 100 to 2000. The weir is placed for collecting the oil that face the OSKIMM OWS 100-T. One or two units of OWS 100-T can be joined together in one boom assembly, offering a high recovery rate. The OWS 100-T is ideal for open sea operations.",
  },
];
const page = () => {
  return (
    <section className="flex flex-wrap justify-center items-center bg-gray-100 py-12 px-4">
      <div className="text-center p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-4xl font-bold text-blue-800">Skimmer</h2>
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

import React, { useState } from "react";

interface AccordionItemProps {
  header: string;
  text: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, text }) => {
  const [active, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!active);
  };
  const accordionContentClassNames = `pl-4 pr-4 overflow-hidden transition-max-h duration-500 ease-in-out ${
    active ? "max-h-0" : "max-h-[500px]"
  }`;

  return (
    <div className="mb-8 w-full bg-white dark:bg-dark-2">
      <button
        className={`faq-btn flex w-full text-left px-4 py-2 border-b border-gray-200 dark:border-dark-3`}
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between w-full">
          <h4 className="text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <svg
            className={`w-4 h-4 fill-current ${
              active ? "transform rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L10 11.5858L14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L10.7071 13.7071Z"
            />
          </svg>
        </div>
      </button>

      <div className={accordionContentClassNames}>
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white dark:bg-dark pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-20 max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions?
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What should I do if oil spill occurs?"
              text="An important point is that responders can potentially clean up what is on top of the water but recovering oil droplets from the water column is practically impossible. This is why it is so important to spill responders to receive accurate predictions of the movement of the surface slicks so they can quickly implement cleanup or prevention strategies. and the most important is you should call trusted party to deal with."
            />
            <AccordionItem
              header="What measures are being taken for the health and safety of those responding to the spill?"
              text="Cleanup crews must have specific safety training, skill sets, qualifications and certifications to ensure the safety of the spill site. Additionally, those working within the oil-affected areas are required to wear specific personal protective equipment. Safety and health officials are also on-scene monitoring oil spill response activities."
            />
            <AccordionItem
              header="What harm the oil could cause?"
              text="When oil is released into the water, it can cause harm to marine animals and the environment. Oil contains thousands of chemical compounds. Polycyclic aromatic hydrocarbons or PAHs as they are commonly known, are a class of oil compounds that have been associated with toxic effects in exposed organisms. Because of this, scientists frequently study PAHs in spilled oil to gauge the oil's potential environmental impact."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

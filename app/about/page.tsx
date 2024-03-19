import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="block">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <h3 className="w-full text-center mb-10 pb-4 py-5 text-5xl leading-tight text-gray-700">
            About Us
          </h3>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <p className="mt-4 text-lg leading-relaxed text-gray-600 text-justify">
                PT. Blue Ocean Sejahtera is an independent Indonesian company,
                engaging in the design, manufacture, installation, and
                commissioning of Oil Spill Response Equipment for Platforms,
                Ships, Jetties, Drilling, and other facilities related to marine
                environmental issues. Established in 2006 with our office
                located in Jakarta and workshops in Bekasi and Sentul, we are
                staffed with competent and experienced personnel. To keep
                developing, we have committed to taking first priority in
                overall professional performance to achieve the highest possible
                engineering standards.
              </p>
              <div className="mt-5">
                <span>A. Nugroho D.S</span>
                <p>Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ml-auto mr-auto px-4">
            <h3 className="mb-4 mt-10 md:mt-0 border-b pb-4 text-3xl md:text-6xl leading-tight">
              Ready to handle any oil spill emergency any time.
            </h3>
          </div>
        </div>
      </div>
      <Featured />
    </div>
  );
};

export default AboutPage;

const Featured = () => (
  <section className="relative py-20">
    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-1/2 ml-auto mr-auto px-4">
          <Image
            alt="imageabout"
            className="h-auto w-auto rounded-lg shadow-lg"
            src="/images/about/about1.jpg"
            width={800}
            height={800}
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <h3 className="mt-7 md:mt-0 text-3xl font-semibold leading-tight">
              17 YEARS OF UNDEFEATED SUCCESS​
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 text-justify">
              Blue Ocean Sejahtera is able to integrate the Oil Spill Response
              services, by providing an extensive range of oil spill control
              equipment and preparedness service, produced in our own modern
              facilities. Through our range of services, depth of expertise, we
              are trusted by our clients. These success stories are only
              achieved as laid on the strength of knowledge on Environmental
              Engineering and Oil Characteristic. That helps us to:{" "}
            </p>

            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      Design the right equipment.​
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">
                      Set robust and systemic oil spill response.​
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Manage the logistic.​</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

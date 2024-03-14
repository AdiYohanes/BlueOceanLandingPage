"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

const projects = [
  {
    client: "PT Petro China INT’L (BERMUDA) LTD ",
    project: "OSPICO Oil Skimmer OS-17T, Power Pack, Oil Boom OP-27",
  },
  {
    client: "Pertamina UPMS-3 Unit TT Tanjung Gerem ",
    project: "OSPICO Oil Dispersant",
  },
  {
    client: "PT Pupuk Sriwijaya ",
    project: "OSPICO Oil Skimmer OS-6T, Power Pack, Oil Boom OP-27",
  },
  {
    client: "PT Petro China INT’L (BERMUDA) LTD ",
    project: "OSPICO Oil Boom OP-27",
  },
  {
    client: "PT Smesindo Saksi Mandraguna 	",
    project: "Skimmer OS-6T, Power Pack",
  },
  {
    client: "PT Maulindo Duaribu/PLN Muara Tawar ",
    project: "OSPICO Oil Boom OP-SK27",
  },
  {
    client: "PT PAL Indonesia",
    project: "OSPICO Oil Boom OP-SK27",
  },
  {
    client: "PT Pelayaran Musamus Tanker ",
    project: "OSPICO Oil Boom OP-SK27",
  },
  {
    client: "PT Wilmar Nabat ",
    project: "OSPICO Oil Boom OP-SK27",
  },
  {
    client: "PT Pelabuhan Penajam Banua Taka",
    project:
      "OSPICO Oil Skimmer OS-17T, Power Pack, Hydraulic & Transfer Hose, Oil Boom, Anchor System, Response Boat ORB 600",
  },
  {
    client: "Singapore Petroleum Company (SPC) ",
    project: "WWTP on Naga Utara #1 and #2, WWTP on Naga Selatan #1",
  },
  {
    client: "PT Shell Indonesia",
    project:
      "Inﬂatable Boom OSIB 70, Gravity Roller, Boom Container, Inﬂator Portable, Absorbent Mat, Mini Vacuum Skimmer, Oil Dispersant, Dispersant Backpack Sprayer",
  },
  {
    client: "PT Indonesia Bulk Terminal",
    project: "OSPICO Detachable Tank OSTANK 12T",
  },
  {
    client: "PT Trans Pacifc Petrochemical Indotama",
    project: "OSPICO Absorbent Boom, Floatong Mooring Hawser, Samson Buoy",
  },
  {
    client: "PT JAKARTA Tank Terminal / PT Vopak",
    project: "OSPICO Oil Skimmer OSKIM OSW-25T (Mult System)",
  },
  {
    client: "PT Bintang Trisakt Jaya/PT Indo Tambangraya Megah Tbk",
    project:
      "OSPICO Oil Skimmer OS-17T, OSPICO Oil Boom OP-27, Riser and Track Stainless Steel, Anchoring System",
  },
  {
    client: "PT Persada Sukses Makmur",
    project: "OSPICO Oil Boom OP-SK27, Tow Bridle",
  },
  {
    client: "PT Prima Sarana Gemilang",
    project: "OSPICO Oil Boom OP-SK27",
  },
  {
    client: "PT Tanker Samudera Mandiri/PT Pertamina Perka palan Bontang",
    project: "OSPICO Oil Boom OP-27",
  },
  {
    client: "Exxonmobil Cepu Limited/Sembawang Shipyard Pte Ltd",
    project:
      "Oﬀshore Sea Boom System, Dynamic Skimmer, Adhesive Brush Skimmer, Multpurpose Powerpack, Floatng Storage, etc",
  },
  {
    client: "PT Dharma Lautan Utama",
    project: "Rental Oil Spill Response Equipment",
  },
  {
    client: "PT KaryaIndah Alam Sejahtera",
    project:
      "OSPICO Oil Boom OP-SK70, Weir Skimmer Include Power Pack and Hose, Floatng Storage 15T",
  },
  {
    client: "PT Pelabuhan Muara Sampara",
    project: "Oil Boom Reel with Hydraulic Supply",
  },
  {
    client: "Husky-CNOOC Madura Limited",
    project: "Navigaton Buoy, Spar Buoy Mooring",
  },
];

const ProjectPage = () => {
  const [showAll, setShowAll] = useState(false);
  const initialRowCount = 10;
  const displayedProjects = showAll
    ? projects
    : projects.slice(0, initialRowCount);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="m-8 flex flex-col items-center">
      <div className="pt-2 pb-5 flex flex-col items-center justify-center gap-5">
        <h3 className="w-full text-center mb-10 border-b pb-4 text-5xl leading-tight text-gray-700">
          Our Successful Projects
        </h3>
        <h2 className="text-center leading-tight">
          We are proud to show you our completed and highly successful projects.
        </h2>
      </div>
      <motion.div
        className="overflow-x-auto font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Table className="w-full md:w-[800px] text-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]" style={{ textAlign: "center" }}>
                No
              </TableHead>
              <TableHead style={{ textAlign: "center", width: "300px" }}>
                Name of Clients
              </TableHead>
              <TableHead style={{ textAlign: "center", width: "500px" }}>
                Project
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedProjects.map((project, index) => (
              <TableRow key={index + 1}>
                <TableCell
                  className="font-medium"
                  style={{ textAlign: "center" }}
                >
                  {index + 1}
                </TableCell>
                <TableCell>{project.client}</TableCell>
                <TableCell>{project.project}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
      <div className="text-center">
        {projects.length > initialRowCount && (
          <motion.button
            onClick={toggleShowAll}
            className="show-more-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;

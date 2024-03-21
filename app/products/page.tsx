"use client";
import Accordion from "@/components/product/Faq";
import Card from "@/components/Cards";
import React from "react";

const ProductPage = () => {
  const cardContent = [
    {
      image: "",
      title: "OIL BOOM",
      desc: "",
      textButton: "",
      link: "",
    },
  ];

  return (
    <>
      <div className="col-span-1">
        <div className="relative rounded-xl bg-white text-gray-700  p-6 flex flex-col justify-center items-center">
        <h3 className="mb-4 border-b pb-4 text-5xl leading-tight">
              Product
            </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 mt-3 mb-10 sm:grid-cols-2 lg:grid-cols-3 p-10">
        <Card
          imageUrl="/images/product/gambar1.jpg"
          title="Oil Boom"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Read more"
          buttonLink="#"
        />
        <Card
          imageUrl="/images/product/gambar2.jpg"
          title="Skimmer"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Read more"
          buttonLink="#"
        />
        <Card
          imageUrl="/images/product/gambar3.png"
          title="Response Boat"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Read more"
          buttonLink="#"
        />
        <Card
          imageUrl="/images/product/gambar4.jpg"
          title="Vaccum Truck"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Read more"
          buttonLink="#"
        />
        <Card
          imageUrl="/images/product/gambar5.jpg"
          title="Dispersant Pump"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Read more"
          buttonLink="#"
        />
        <Card
          imageUrl="/images/product/gambar6.jpg"
          title="Absorbent"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Read more"
          buttonLink="#"
        />
      </div>
      <div className="flex flex-col gap-10 mb-20 sm:flex-row sm:justify-center sm:items-center sm:gap-20">
        <Card
          imageUrl="/images/product/gambar7.jpg"
          title="Storage Tank"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Read more"
          buttonLink="#"
        />
        <Card
          imageUrl="/images/product/gambar8.png"
          title="Waste Water Treatment Plant"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Read more"
          buttonLink="#"
        />
      </div>

      <div className="flex justify-center">
        <Accordion />
      </div>
    </>
  );
};

export default ProductPage;

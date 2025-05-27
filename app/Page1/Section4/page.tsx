import React from "react";

import img1 from "../../../assets/page1_section4_img1.png";
import img2 from "../../../assets/page1_section4_img2.png";
import img3 from "../../../assets/page1_section4_img3.png";
import img4 from "../../../assets/page1_section4_img4.png";
import img5 from "../../../assets/page1_section4_img5.png";
import img6 from "../../../assets/page1_section4_img6.png";
import img7 from "../../../assets/page1_section4_img7.png";

import pattern from "../../../assets/page1_section4_pattern.png";
import Image from "next/image";

const Cards = [
  {
    id: "1",
    img: img1,
    title: "Retail & Consumer Goods",
    description: "Shop everyday essentials, electronics, fashion and more.",
  },
  {
    id: "2",
    img: img2,
    title: "Food & Beverages",
    description:
      "From restaurants to speciality food shops, find what satisfies",
  },
  {
    id: "3",
    img: img3,
    title: "Lifestyle & Home Services",
    description: "Get things done - from home repairs to personal care.",
  },
  {
    id: "4",
    img: img4,
    title: "Travel & Experiences",
    description: "Book, explore and experience more with Zonke.",
  },
  {
    id: "5",
    img: img5,
    title: "Digital Products & Subscriptions",
    description: "Digital Experiences and services at your fingertips.",
  },
  {
    id: "6",
    img: img6,
    title: "Local & Speciality Sellers",
    description: "Support unique, local and handmade businesses.",
  },
  {
    id: "7",
    img: img7,
    title: "Financial Services",
    description: "Make payments, access credit and manage your monday.",
  },
];

const page = () => {
  return (
    <div className="px-[5%] overflow-x-clip py-12 flex flex-col gap-6 overflow-hidden">
      {/* top */}
      <div className="flex flex-row">
        <div>
            <h2 className="text-[#FC670F] text-[32px]">
          Businesses{" "} <br />
          <span className="text-[#2D6E62] text-[32px]">
            {`You’ll`} Find on Zonke
          </span>
        </h2>
        <p className="text-[#3D3D3D] text-[20px]">
          Zonke connects you with a wide range of merchants — from your favorite
          local spots to essential services and emerging digital sellers.
        </p>
        </div>

        <div className="h-0 relative">
            <Image 
            src={pattern}
            alt="img"
            width={300}
            height={300}
            className="relative md:left-20 md:bottom-23"
            />
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-wrap gap-12 ">
        {Cards.slice(0, 3).map((card) => (
          <div key={card.id} className="w-[40%] md:w-[20%] flex flex-col gap-4">
            <Image src={card.img} alt={card.title} />

            <div className="flex flex-col">
              <h2 className="font-semibold">{card.title}</h2>
              <p className="text-[14px] ">{card.description}</p>
              <div className="h-[4px] rounded-full bg-[#FC670F] w-[40%] mt-2"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap  gap-12">
        {Cards.slice(3).map((card) => (
          <div key={card.id} className="w-[40%] md:w-[20%] flex flex-col gap-4">
            <Image src={card.img} alt={card.title} />

            <div className="flex flex-col">
              <h2 className="font-semibold">{card.title}</h2>
              <p className="text-[14px] ">{card.description}</p>
              <div className="h-[4px] rounded-full bg-[#FC670F] w-[40%] mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

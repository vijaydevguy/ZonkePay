import Image from "next/image";
import React from "react";

import img from "../../../assets/page2_section2_img.png";
import img1 from "../../../assets/page2_seciton2_img1.png";
import img2 from "../../../assets/page2_seciton2_img2.png";
import img3 from "../../../assets/page2_seciton2_img3.png";
import img4 from "../../../assets/page2_seciton2_img2-1.png";
import img5 from "../../../assets/page2_seciton2_img5.png";

const page = () => {
  const Cards = [
    {
      id: "1",
      img: img1,
      description: "Accept instant digital payments from customers",
    },
    {
      id: "2",
      img: img2,
      description: "Get listed in the Zonke app for greater visibility",
    },
    {
      id: "3",
      img: img3,
      description: "Offer cashback deals to attract and retain customers",
    },
    {
      id: "4",
      img: img4,
      description:
        "Monitor transactions and insights via your merchant dashboard",
    },
    {
      id: "5",
      img: img5,
      description: "Set up your store in minutes — no hardware needed",
    },
  ];
  return (
    <div className="px-[5%] py-12 overflow-x-clip overflow-hidden flex flex-col gap-6">
      {/* top */}
      <div className="flex md:flex-row flex-col items-center gap-6">
        <h2 className="text-[32px]">
          A Smarter Way to Accept Payments and Get Discovered
        </h2>
        <div className="md:h-10 items-center ">
          <Image src={img} alt="iamge" 
          className="pointer-events-none"
          />
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col gap-6">
        <h2 className="text-[20px]">Benefits:</h2>

        <div className="flex flex-col gap-6 justify-between">
          <div className="flex flex-wrap gap-6">
            {Cards.slice(0, 2).map((card) => (
              <div key={card.id} className="md:w-[250px] w-[45%]">
                <Image src={card.img} alt={card.description} 
                className="pointer-events-none"
                />
                <p>{card.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            {Cards.slice(2).map((card) => (
              <div key={card.id} className="md:w-[250px] w-[45%]">
                <Image src={card.img} alt={card.description} 
                className="pointer-events-none"
                />
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

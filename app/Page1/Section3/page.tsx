import React from "react";

import img1 from "../../../assets/Page1_section3-img1.png";
import img2 from "../../../assets/Page1_section3-img2.png";
import img3 from "../../../assets/Page1_section3-img3.png";
import Image from "next/image";

const Cards = [
  {
    id: "1",
    img: img1,
    title: "Pre-Register for the App",
    description:
      "Sign up today to be the first to explore Zonke when it launches.",
  },
  {
    id: "2",
    img: img2,
    title: "Pre-Register for the App",
    description:
      "Sign up today to be the first to explore Zonke when it launches.",
  },
  {
    id: "3",
    img: img3,
    title: "Pre-Register for the App",
    description:
      "Sign up today to be the first to explore Zonke when it launches.",
  },
];

const page = () => {
  return (
    <div
      className="px-[5%] pb-12 overflow-x-clip flex flex-col  jusify-center gap-6"
      style={{
        backgroundImage: `url('/section3_bg.png')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* top */}
      <div>
        <h2 className="text-[#FFF2A5] text-[32px]">
          <span className="text-[20px]">How </span> <br /> Zonke Works
        </h2>
        <p className="text-white text-[20px]">
          Zonke is more than just a wallet — it connects shoppers with local
          businesses, offers smart ways to pay, and helps merchants grow their
          visibility and revenue.
        </p>
      </div>

      {/* bottom */}
      <div className="flex md:flex-row flex-col md:items-start gap-6">
        {Cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col  justify-center w-[380px] gap-4"
          >
            <Image src={card.img} alt={card.title} />

            <div className="flex flex-col w-full gap-1">
                <h2 className="text-white text-[16px] font-semibold">{card.title}</h2>
                <p className="text-white text-[14px]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

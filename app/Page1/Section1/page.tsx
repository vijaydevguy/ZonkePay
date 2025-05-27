import Image from "next/image";
import React from "react";

import Button from "../../../components/Button/page";

import img1 from "../../../assets/section1_img.png";
import leftbg from "../../../assets/page1_bgleft.png";
import rightbg from "../../../assets/page1_bgright.png";
import eclipse from "../../../assets/largeeelipse_bg.png";

const page = () => {
  return (
    <div
      className="md:h-[100vh] overflow-x-clip px-[5%] py-12 flex flex-col items-center justify-center overflow-hidden
    bg-gradient-t from-[#FF9B19] to-[#FFFEF3]
    "
    >
      <div className="flex flex-row h-0 relative items-center justify-center">
        {/* left gradient */}
        <div className="relative lg:bottom-25 md:bottom-62 bottom-12 lg:right-150 md:right-70  right-42 -z-20 overflow-clip">
          <Image
            src={rightbg}
            alt="left"
            height={500}
            width={500}
            className="pointer-events-none "
          />
        </div>

        {/* right gradient */}
        <div className="relative lg:bottom-25 md:bottom-62 lg:-right-150 md:-right-70  -right-42 bottom-12 -z-20">
          <Image
            src={leftbg}
            alt="left"
            height={500}
            width={500}
            className="pointer-events-none "
          />
        </div>
      </div>

      <div className="absolute w-full lg:-bottom-80 md:-bottom-52 -bottom-115 right-2 -z-20">
        <Image
          src={eclipse}
          alt="left"
          width={4000}
          className="pointer-events-none "
        />
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center overflow-hidden">
        {/* left */}
        <div className="flex flex-col gap-[56px]">
          <div className="flex flex-col ">
            <div>
              <h2 className="text-[40px] text-[#A32C14]">
                Powering South {`Africa’s`} Digital Economy
              </h2>
              <p className="text-[20px] text-[#8B8A85]">
                Driving local business visibility, rewarding everyday purchases,
                and simplifying payments
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <p className="text-[16px] text-[#8B8A85]">
              Zonke connects merchants and consumers through a secure,
              wallet-first platform built for inclusive growth.
            </p>

            <div className="flex md:flex-row flex-col gap-6">
              {/* <button className="bg-[#FA5117] px-[18px] py-[10px] rounded-[8px] text-white">
              Are you a consumer? Join the waitlist
            </button>

            <button className="border border-[#FA5117] px-[18px] py-[10px] rounded-[8px] text-[#FA5117]">
              Register Your Business
            </button> */}

              <Button
                text="Are you a consumer? Join the waitlist"
                link="#"
                className="w-full md:w-auto"
              />
              <Button
                text="Register Your Business"
                link="#"
                secondary
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>

        {/* right */}
        <div>
          <Image src={img1} alt="img" className="pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default page;

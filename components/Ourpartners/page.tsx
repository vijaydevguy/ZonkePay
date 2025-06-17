"use client";
import React from "react";
// import Zonkey from "../../assets/Logo.webp";
import Partner1 from "../../assets/Partner1.jpg";
import Partner2 from "../../assets/Partner2 1.png";

import Image from "next/image";

export const Page = () => {
  const companies = [
    { name: "Zonkey", logo: Partner1, id: 1 },
    { name: "Zonkey", logo: Partner2, id: 2 },
    // { name: "Zonkey", logo: Zonkey, id: 3 },
    // { name: "Zonkey", logo: Zonkey, id: 4 },
  ];

  // Duplicate the companies array to create seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="flex flex-col lg:pb-20 md:pb-8 px-[5%] w-full items-center justify-center gap-5 py-12 overflow-x-clip relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_center,_rgba(178,230,228,0.8),_transparent_70%)]"></div>

      {/* Header */}
      <div className="flex flex-row items-center justify-center w-full lg:px-[15%] md:px-[5%]">
        <hr className="flex-grow border-t border-[#686868] block" />
        <h2 className="md:px-[10%] px-[5%] whitespace-nowrap font-[outfit] text-[#6D6D6D] font-medium md:text-[24px] text-[16px]">
          Our Partners
        </h2>
        <hr className="flex-grow border-t border-[#686868] block" />
      </div>

      {/* Brands Container - with your original masking effect */}
      <div className="relative w-full max-w-[90%] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent_10%,black_30%,black_70%,transparent_90%)]">
        {/* Brands Scroller */}
        <div className="flex items-center justify-center w-max animate-infinite-scroll mt-4">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="mx-8 flex-shrink-0 lg:grayscale grayscale-0 hover:grayscale-0"
            >
              <Image
                src={company.logo}
                alt={company.name}
                className="w-[250px] min-w-[180px] h-auto pointer-events-none"
                width={250}
                height={100} // Add appropriate height
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};



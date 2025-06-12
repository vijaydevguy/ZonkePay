"use client";

import React from "react";
import { motion } from "framer-motion";
// import Button from "../../../components/Button/page";
import Image from "next/image";

import globe from "../../../assets/Page1_Section2_img1.png";
import img1 from "../../../assets/Page1_Section2_smallimg1.png";
import img2 from "../../../assets/Page1_Section2_smallimg2.png";
import img3 from "../../../assets/Page1_Section2_smallimg3.png";
import img4 from "../../../assets/Page1_Section2_smallimg4.png";

const images = [
  {
    id: "1",
    img: img1,
    title: "Pay instantly with your digital wallet",
  },
  {
    id: "2",
    img: img2,
    title: "Earn cashback at partner stores",
  },
  {
    id: "3",
    img: img3,
    title: "Discover nearby deals",
  },
  {
    id: "4",
    img: img4,
    title: "Track your spending in one place",
  },
];

const page = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageItem = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const globeAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="px-[5%] overflow-x-clip pt-20 bg-[rgb(255,254,243)] flex flex-col items-center justify-center gap-6">
      {/* top */}
      <motion.div
        className="flex md:flex-row flex-col gap-6 items-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px" }}
        variants={container}
      >
        <div className="md:w-[80%]">
          <motion.h2 className="font-semibold text-[24px]" variants={textItem}>
            Why Thousands Across South Africa{" "}
            <span className="text-[#FA5117]">Trust Zonke</span>
          </motion.h2>
          <motion.p className="text-[20px] text-[#8B8A85]" variants={textItem}>
            From everyday shoppers to growing local businesses, Zonke connects
            people, places, and payments — making discovery, transactions, and
            rewards smarter and more seamless for everyone.
          </motion.p>
        </div>

        {/* <motion.div variants={textItem} 
        className="w-full flex flex-row items-center justify-end"
        >
          <Button
            text="Register Your Business"
            link="#"
            secondary
            className="w-full md:w-auto"
          />
        </motion.div> */}
      </motion.div>

      {/* bottom */}
      <div className="flex md:flex-row flex-col justify-between items-center overflow-hidden">
        {/* left - image grid */}
        <motion.div
          className="flex flex-col md:flex-row md:flex-wrap items-start justify-start gap-12 lg:w-[40%] md:w-[60%] w-full lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          variants={container}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="lg:w-[150px] md:w-[40%] flex md:flex-col flex-row gap-2 items-center"
              variants={imageItem}
            >
              <div className="flex flex-row items-center justify-center min-w-[20px] ">
                <Image
                  src={image.img}
                  alt={image.title}
                  className="pointer-events-none"
                
                />
              </div>
              <motion.p className="text-[16px]" variants={textItem}>
                {image.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* right - globe image */}
        <motion.div
          className="lg:w-[50%] md:w-[70%] w-full md:h-[400px] md:h-full h-[250px] flex items-center justify-center relative overflow-y-clip relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          variants={globeAnim}
        >
          <Image
            src={globe}
            alt="globe"
            className="w-[800px] relative lg:top-48 md:top-32 top-28 pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default page;

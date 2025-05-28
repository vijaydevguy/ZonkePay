"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "../../../assets/page2_section4_img1.png";
import img2 from "../../../assets/page2_section4_img2.png";
import img3 from "../../../assets/page2_section4_img3.png";
import img4 from "../../../assets/page2_section4_img4.png";
import img5 from "../../../assets/page2_section4_img5.png";
import img6 from "../../../assets/page2_section4_img6.png";
import img7 from "../../../assets/page2_section4_img7.png";
import pattern from "../../../assets/page1_section4_pattern.png";

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
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleX = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="px-[5%] overflow-x-clip py-12 flex flex-col gap-6 overflow-hidden">
      {/* top */}
      <motion.div 
        className="flex flex-row justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-[#A32C14] text-[32px]">
            Built for {" "}
            <motion.span 
              className="font-semibold text-[32px]"
              variants={fadeUp}
            >
              Every Kind of Business
            </motion.span>
          </h2>
        </motion.div>

        <motion.div 
          className="h-0 relative"
          variants={fadeIn}
        >
          <Image
            src={pattern}
            alt="img"
            width={300}
            height={300}
            className="relative md:left-20 md:bottom-23 pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* bottom - first row */}
      <motion.div 
        className="flex flex-wrap gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        {Cards.slice(0, 3).map((card) => (
          <motion.div 
            key={card.id} 
            className="w-[40%] md:w-[20%] flex flex-col gap-4"
            variants={fadeIn}
          >
            <Image 
              src={card.img} 
              alt={card.title} 
              className="pointer-events-none"
            />
            <motion.div className="flex flex-col">
              <motion.h2 
                className="font-semibold"
                variants={fadeUp}
              >
                {card.title}
              </motion.h2>
              <motion.p 
                className="text-[14px]"
                variants={fadeUp}
              >
                {card.description}
              </motion.p>
              <motion.div 
                className="h-[4px] rounded-full bg-[#FC670F] w-[40%] mt-2"
                variants={scaleX}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* bottom - second row */}
      <motion.div 
        className="flex flex-wrap gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        {Cards.slice(3).map((card) => (
          <motion.div 
            key={card.id} 
            className="w-[40%] md:w-[20%] flex flex-col gap-4"
            variants={fadeIn}
          >
            <Image 
              src={card.img} 
              alt={card.title} 
              className="pointer-events-none"
            />
            <motion.div className="flex flex-col">
              <motion.h2 
                className="font-semibold"
                variants={fadeUp}
              >
                {card.title}
              </motion.h2>
              <motion.p 
                className="text-[14px]"
                variants={fadeUp}
              >
                {card.description}
              </motion.p>
              <motion.div 
                className="h-[4px] rounded-full bg-[#FC670F] w-[40%] mt-2"
                variants={scaleX}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default page;

// import React from "react";


// import img1 from "../../../assets/page2_section4_img1.png";
// import img2 from "../../../assets/page2_section4_img2.png";
// import img3 from "../../../assets/page2_section4_img3.png";
// import img4 from "../../../assets/page2_section4_img4.png";
// import img5 from "../../../assets/page2_section4_img5.png";
// import img6 from "../../../assets/page2_section4_img6.png";
// import img7 from "../../../assets/page2_section4_img7.png";

// import pattern from "../../../assets/page1_section4_pattern.png";
// import Image from "next/image";

// const Cards = [
//   {
//     id: "1",
//     img: img1,
//     title: "Retail & Consumer Goods",
//     description: "Shop everyday essentials, electronics, fashion and more.",
//   },
//   {
//     id: "2",
//     img: img2,
//     title: "Food & Beverages",
//     description:
//       "From restaurants to speciality food shops, find what satisfies",
//   },
//   {
//     id: "3",
//     img: img3,
//     title: "Lifestyle & Home Services",
//     description: "Get things done - from home repairs to personal care.",
//   },
//   {
//     id: "4",
//     img: img4,
//     title: "Travel & Experiences",
//     description: "Book, explore and experience more with Zonke.",
//   },
//   {
//     id: "5",
//     img: img5,
//     title: "Digital Products & Subscriptions",
//     description: "Digital Experiences and services at your fingertips.",
//   },
//   {
//     id: "6",
//     img: img6,
//     title: "Local & Speciality Sellers",
//     description: "Support unique, local and handmade businesses.",
//   },
//   {
//     id: "7",
//     img: img7,
//     title: "Financial Services",
//     description: "Make payments, access credit and manage your monday.",
//   },
// ];

// const page = () => {
//   return (
//     <div className="px-[5%] overflow-x-clip py-12 flex flex-col gap-6 overflow-hidden">
//       {/* top */}
//       <div className="flex flex-row justify-between">
//         <div>
//           <h2 className="text-[#A32C14] text-[32px]">
//             Built for {" "}
//             <span className="font-semibold text-[32px]">
//               Every Kind of Business
//             </span>
//           </h2>
//         </div>

//         <div className="h-0 relative">
//           <Image
//             src={pattern}
//             alt="img"
//             width={300}
//             height={300}
//             className="relative md:left-20 md:bottom-23"
//           />
//         </div>
//       </div>

//       {/* bottom */}
//       <div className="flex flex-wrap gap-12 ">
//         {Cards.slice(0, 3).map((card) => (
//           <div key={card.id} className="w-[40%] md:w-[20%] flex flex-col gap-4">
//             <Image src={card.img} alt={card.title} 
//             className="pointer-events-none"
//             />

//             <div className="flex flex-col">
//               <h2 className="font-semibold">{card.title}</h2>
//               <p className="text-[14px] ">{card.description}</p>
//               <div className="h-[4px] rounded-full bg-[#FC670F] w-[40%] mt-2"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-wrap  gap-12">
//         {Cards.slice(3).map((card) => (
//           <div key={card.id} className="w-[40%] md:w-[20%] flex flex-col gap-4">
//             <Image src={card.img} alt={card.title} 
//             className="pointer-events-none"
//             />

//             <div className="flex flex-col">
//               <h2 className="font-semibold">{card.title}</h2>
//               <p className="text-[14px] ">{card.description}</p>
//               <div className="h-[4px] rounded-full bg-[#FC670F] w-[40%] mt-2"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

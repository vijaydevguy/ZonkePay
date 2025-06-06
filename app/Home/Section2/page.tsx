"use client"

import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/Button/page";
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
    <div className="px-[5%] overflow-x-clip pt-12 bg-[#FFFEF3] flex flex-col items-center justify-center gap-6">
      {/* top */}
      <motion.div
        className="flex md:flex-row flex-col gap-6 items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{  margin: "-50px" }}
        variants={container}
      >
        <div className="md:w-[80%]">
          <motion.h2
            className="font-semibold text-[24px]"
            variants={textItem}
          >
            Why Thousands Across South Africa{" "}
            <span className="text-[#FA5117]">Trust Zonke</span>
          </motion.h2>
          <motion.p
            className="text-[20px] text-[#8B8A85]"
            variants={textItem}
          >
            From everyday shoppers to growing local businesses, Zonke connects
            people, places, and payments — making discovery, transactions, and
            rewards smarter and more seamless for everyone.
          </motion.p>
        </div>

        <motion.div variants={textItem} 
        className="w-full flex flex-row items-center justify-end"
        >
          <Button
            text="Register Your Business"
            link="#"
            secondary
            className="w-full md:w-auto"
          />
        </motion.div>
      </motion.div>

      {/* bottom */}
      <div className="flex md:flex-row flex-col justify-between items-center overflow-hidden">
        {/* left - image grid */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 lg:w-[40%] md:w-[50%] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          variants={container}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="lg:w-[200px] md:w-[120px] w-[150px]"
              variants={imageItem}
            >
              <Image
                src={image.img}
                alt={image.title}
                className="pointer-events-none"
              />
              <motion.p
                className="text-[16px]"
                variants={textItem}
              >
                {image.title}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* right - globe image */}
        <motion.div
          className="md:w-[50%] w-full md:h-[400px] h-full flex items-center justify-center relative overflow-y-clip"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          variants={globeAnim}
        >
          <Image
            src={globe}
            alt="globe"
            className="w-[800px] relative lg:top-48 pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default page;

// import React from "react";

// import Button from "../../../components/Button/page";

// import globe from "../../../assets/Page1_Section2_img1.png";
// import img1 from "../../../assets/Page1_Section2_smallimg1.png";
// import img2 from "../../../assets/Page1_Section2_smallimg2.png";
// import img3 from "../../../assets/Page1_Section2_smallimg3.png";
// import img4 from "../../../assets/Page1_Section2_smallimg4.png";
// import Image from "next/image";

// const images =[
//     {
//         id:"1",
//         img: img1,
//         title: "Pay instantly with your digital wallet",
//     },
//     {
//         id:"2",
//         img: img2,
//         title: "Pay instantly with your digital wallet",
//     },
//     {
//         id:"3",
//         img: img3,
//         title: "Pay instantly with your digital wallet",
//     },
//     {
//         id:"4",
//         img: img4,
//         title: "Pay instantly with your digital wallet",
//     }
// ]

// const page = () => {
//   return (
//     <div className="px-[5%] overflow-x-clip pt-12 bg-[#FFFEF3] flex flex-col items-center justify-center gap-6">
//       {/* top */}
//       <div className="flex md:flex-row flex-col gap-6 items-center jusitfy-center ">
//         <div className="md:w-[80%]">
//           <h2 className="font-semibold text-[24px] ">Why Thousands Across South Africa <span className="text-[#FA5117]">Trust Zonke</span></h2>
//           <p className="text-[20px] text-[#8B8A85]">
//             From everyday shoppers to growing local businesses, Zonke connects
//             people, places, and payments — making discovery, transactions, and
//             rewards smarter and more seamless for everyone.
//           </p>
//         </div>

//         {/* <button className="border border-[#FA5117] px-[18px] py-[10px] rounded-[8px] text-[#FA5117]">
//           Register Your Business
//         </button> */}

//         <Button 
//             text="Register Your Business"
//             link="#"
//             secondary
//             className="w-full md:w-auto"
//         />
//       </div>

//       {/* bottom */}
//       <div className="flex md:flex-row flex-col justify-between items-center overflow-hidden">
//         {/* left */}
//         <div className="flex flex-wrap justify-center items-center gap-12 lg:w-[40%] md:w-[50%] w-full">
//             {images.map((image) => (
//                 <div key={image.id} className="lg:w-[200px] md:w-[120px] w-[150px]">
//                     <Image 
//                     src={image.img}
//                     alt={image.title}
//                     className="pointer-events-none"
//                     />

//                     <p className="text-[16px]">{image.title}</p>
//                 </div>
//             ))}
//         </div>

//         {/* right */}
//         <div className=" md:w-[50%] w-full md:h-[400px] h-full flex items-center
//           justify-center relative overflow-y-clip">
//             <Image
//             src={globe}
//             alt="globe"
//             className="w-[800px] relative  lg:top-48 pointer-events-none"
//             />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client"

import React from "react";
import img1 from "../../../assets/tech1.png";
import img2 from "../../../assets/tech2.png";
import img3 from "../../../assets/tech3.png";
import img4 from "../../../assets/tech4.png";
import img5 from "../../../assets/tech5.png";
import img6 from "../../../assets/tech6.png";
import img7 from "../../../assets/tech7.png";
import img8 from "../../../assets/tech8.png";
import img9 from "../../../assets/tech9.png";
import Image from "next/image";
import { motion } from "framer-motion";

const TechStack = () => {
  const logos = [
    { id: "1", logo: img1 },
    { id: "2", logo: img2 },
    { id: "3", logo: img3 },
    { id: "4", logo: img4 },
    { id: "5", logo: img5 },
    { id: "6", logo: img6 },
    { id: "7", logo: img7 },
    { id: "8", logo: img8 },
    { id: "9", logo: img9 },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="flex md:flex-row flex-col px-[5%] py-12 overflow-x-hidden bg-[#FC670F] items-center justify-center gap-6">
      {/* left */}
      <motion.div 
        className="flex flex-col gap-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-50px" }} /* Changed to false */
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-[32px]">Tech Stack</h2>
        <p className="text-white text-[20px]">
          Built with a modern, secure, and scalable tech stack - designed to
          deliver seamless performance across web and mobile.
        </p>
      </motion.div>

      {/* right */}
      <motion.div 
        className="flex flex-wrap gap-6 justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }} /* Changed to false */
      >
        {logos.map((logo) => (
          <motion.div 
            key={logo.id}
            variants={item}
            whileHover="hover"
            className="hover:shadow-lg rounded-lg"
          >
            <Image 
              src={logo.logo} 
              alt={`Technology logo ${logo.id}`} 
              width={80}
              height={80}
              className="object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;


// import React from "react";
// import img1 from "../../../assets/tech1.png";
// import img2 from "../../../assets/tech2.png";
// import img3 from "../../../assets/tech3.png";
// import img4 from "../../../assets/tech4.png";
// import img5 from "../../../assets/tech5.png";
// import img6 from "../../../assets/tech6.png";
// import img7 from "../../../assets/tech7.png";
// import img8 from "../../../assets/tech8.png";
// import img9 from "../../../assets/tech9.png";
// import Image from "next/image";

// const page = () => {
//   const logos = [
//     {
//       id: "1",
//       logo: img1,
//     },
//     {
//       id: "2",
//       logo: img2,
//     },
//     {
//       id: "3",
//       logo: img3,
//     },
//     {
//       id: "4",
//       logo: img4,
//     },
//     {
//       id: "5",
//       logo: img5,
//     },
//     {
//       id: "6",
//       logo: img6,
//     },
//     {
//       id: "7",
//       logo: img7,
//     },
//     {
//       id: "8",
//       logo: img8,
//     },
//     {
//       id: "9",
//       logo: img9,
//     },
//   ];
//   return (
//     <div className="flex md:flex-row flex-col px-[5%] py-12 overflow-x-hidden bg-[#FC670F] items-center justify-center gap-6">
//       {/* left */}
//       <div className="flex flex-col gap-2">
//         <h2 className="text-white text-[32px]">Tech Stack</h2>
//         <p className="text-white text-[20px]">
//           Built with a modern, secure, and scalable tech stack - designed to
//           deliver seamless performance across web and mobile.
//         </p>
//       </div>

//       {/* right */}
//       <div className="flex flex-wrap gap-6 justify-center">
//         {logos.map((logo) => (
//           <div key={logo.id}>
//             <Image src={logo.logo} alt={logo.id} 
//             width={80}
//             height={80}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

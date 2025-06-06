"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const Cards = [
    {
      id: "1",
      text: "View real-time earnings and payouts",
    },
    {
      id: "2",
      text: "Create and manage cashback deals",
    },
    {
      id: "3",
      text: "Withdraw funds directly to your bank",
    },
    {
      id: "4",
      text: "Track transactions with filters and exports",
    },
    {
      id: "5",
      text: "Monitor customer activity and visits",
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      style={{
        backgroundImage: `url('/page2_section5_bg.webp')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="px-[5%] py-12 overflow-x-clip flex flex-col gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-50px" }}
      transition={{ staggerChildren: 0.1 }}
    >
      {/* top */}
      <motion.div variants={fadeUp}>
        <motion.h2 
          className="text-[32px] text-white"
          variants={fadeUp}
        >
          Your Business, <br /><motion.span 
          className="font-semibold"
          variants={fadeUp} >Fully Digital</motion.span>
        </motion.h2>
        <motion.p 
          className="text-[20px] text-white"
          variants={fadeUp}
        >
          Manage your transactions, offers, and wallet{" "}
          <motion.span 
            className="text-[20px] font-semibold"
            variants={fadeUp}
          >
            all in one place.
          </motion.span>
        </motion.p>
      </motion.div>

      {/* bottom */}
      <motion.div 
        className="flex flex-col gap-4"
        variants={fadeUp}
      >
        <motion.h2 
          className="text-white text-[20px]"
          variants={fadeUp}
        >
          Key Features:
        </motion.h2>
        <motion.div 
          className="flex flex-wrap gap-6"
          variants={fadeIn}
        >
          {Cards.map((card) => (
            <motion.div 
              key={card.id} 
              className="w-full md:w-auto"
              // variants={fadeIn}
              // whileHover={{ scale: 1.05 }}
            >
              <motion.p 
                className='text-[#A93922] rounded-full bg-white py-[12px] px-[14px] w-full'
                variants={fadeUp}
              >
                {card.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default page;

// import React from "react";

// const page = () => {
//   const Cards = [
//     {
//       id: "1",
//       text: "View real-time earnings and payouts",
//     },
//     {
//       id: "2",
//       text: "Create and manage cashback deals",
//     },
//     {
//       id: "3",
//       text: "Withdraw funds directly to your bank",
//     },
//     {
//       id: "4",
//       text: "Track transactions with filters and exports",
//     },
//     {
//       id: "5",
//       text: "Monitor customer activity and visits",
//     },
//   ];

//   return (
//     <div
//       style={{
//         backgroundImage: `url('/page2_section5_bg.png')`,
//         backgroundSize: "100% 100%",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//       className=" px-[5%] py-12 overflow-x-clip flex flex-col gap-6"
//     >
//       {/* top */}
//       <div>
//         <h2 className="text-[32px] text-white">
//           Your Business, <span>Fully Digital</span>
//         </h2>
//         <p className="text-[20px] text-white">
//           Manage your transactions, offers, and wallet{" "}
//           <span className="text-[20px] font-semibold">all in one place.</span>
//         </p>
//       </div>
//       {/* bottom */}
//       <div className="flex flex-col gap-4">
//         <h2 className="text-white text-[20px]">Key Features:</h2>
//         <div className="flex flex-wrap gap-6">
//           {Cards.map((card) => (
//             <div key={card.id} className="w-full md:w-auto">
//               <p className='text-["#A93922"] rounded-full bg-white py-[12px] px-[14px] w-full'>
//                 {card.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

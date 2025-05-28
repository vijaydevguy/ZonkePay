"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/Button/page";

const page = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      className='px-[5%] py-12 overflow-x-clip h-screen flex flex-col gap-6 justify-center'
      style={{
        backgroundImage: `url('/page2_bg1.png')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-50px" }}
      variants={container}
    >
      <motion.div className='flex flex-col md:w-[40%]'>
        <motion.h1 
          className='text-[40px] text-white font-semibold'
          variants={fadeUp}
        >
          Grow Your Business. <br />
          <motion.span 
            className='font-normal'
            variants={fadeUp}
          >
            Get Discovered
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className='text-[20px] text-white'
          variants={fadeUp}
        >
          Zonke helps you grow your business with digital wallet payments, cashback campaigns, and real-time sales tracking — all from one dashboard.
        </motion.p>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button 
          link="#"
          text="Register Your Business"
          className="w-full md:w-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default page;

// import React from 'react'

// import Button from "../../../components/Button/page";

// const page = () => {
//   return (
//     <div
//     className='px-[5%] py-12 overflow-x-clip h-screen flex flex-col gap-6 justify-center'
//     style={{
//         backgroundImage: `url('/page2_bg1.png')`,
//         backgroundSize: "100% 100%",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//         <div className='flex flex-col md:w-[40%] '>
//             <h1 className='text-[40px] text-white font-semibold'>Grow Your Business. <br /><span className='font-normal'>Get Discovered</span></h1>
//             <p className='text-[20px] text-white'>Zonke helps you grow your business with digital wallet payments, cashback campaigns, and real-time sales tracking — all from one dashboard.</p>
//         </div>

//         <div>
//             <Button 
//             link="#"
//             text= "Register Your Business"
//             className="w-full md:w-auto"
//             />
//         </div>
//     </div>
//   )
// }

// export default page
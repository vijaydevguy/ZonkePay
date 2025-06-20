"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../../../components/Button/page";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typically the breakpoint for md in Tailwind
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants with delays - only for desktop
  const fadeUp = {
    hidden: isMobile ? {} : { opacity: 0, y: 20 },
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
    <div
      className='px-[5%] py-12 overflow-x-clip md:h-screen h-[85vh] flex flex-col gap-6 md:items-start items-center justify-center'
      style={{
        backgroundImage: `url('/page2_bg1.webp')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className='flex flex-col lg:w-[40%] gap-3'>
        {/* First line */}
        <motion.h1 
          className='text-[40px] text-white font-semibold leading-[48px]'
          initial={isMobile ? false : "hidden"}
          animate={isMobile ? false : "visible"}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <span className="font-normal">ZonkePay for Business -</span>  Grow Your Business. 
          {/* Grow Your Business. */}
        </motion.h1>
        
        {/* Second line */}
        <motion.h1
          className='text-[40px] text-white font-normal leading-[32px]'
          initial={isMobile ? false : "hidden"}
          animate={isMobile ? false : "visible"}
          variants={fadeUp}
          transition={{ delay: 0.8 }}
        >
          Get Discovered
        </motion.h1>
        
        {/* Paragraph */}
        <motion.p 
          className='text-[20px] text-white'
          initial={isMobile ? false : "hidden"}
          animate={isMobile ? false : "visible"}
          variants={fadeUp}
          transition={{ delay: 1 }}
        >
          Zonke helps you grow your business with digital wallet payments, cashback campaigns, and real-time sales tracking — all from one dashboard.
        </motion.p>
      </div>

      {/* Button */}
      <motion.div 
        initial={isMobile ? false : "hidden"}
        animate={isMobile ? false : "visible"}
        variants={fadeUp}
        transition={{ delay: 1.3 }}
      >
        <Button 
          link="https://merchants.zonkepay.com/register "
          text="Register Your Business"
          className="w-full md:w-auto"
        />
      </motion.div>
    </div>
  );
};

export default Page;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Button from "../../../components/Button/page";

// const page = () => {
//   // Animation variants with delays
//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { 
//         duration: 0.6, 
//         ease: "easeOut" 
//       }
//     }
//   };

//   return (
//     <div
//       className='px-[5%] py-12 overflow-x-clip md:h-screen h-[85vh] flex flex-col gap-6 md:items-start items-center justify-center'
//       style={{
//         backgroundImage: `url('/page2_bg1.webp')`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className='flex flex-col lg:w-[40%] gap-3'>
//         {/* First line - appears first */}
//         <motion.h1 
//           className='text-[40px] text-white font-semibold leading-[48px]'
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ margin: "-20px", }}
//           variants={fadeUp}
//           transition={{ delay: 0.2 }}
//         >
//           Grow Your Business.
//         </motion.h1>
        
//         {/* Second line - appears after first */}
//         <motion.h1
//           className='text-[40px] text-white font-normal leading-[32px]'
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ margin: "-20px",}}
//           variants={fadeUp}
//           transition={{ delay: 0.8 }}
//         >
//           Get Discovered
//         </motion.h1>
        
//         {/* Paragraph - appears after headings */}
//         <motion.p 
//           className='text-[20px] text-white'
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ margin: "-20px", }}
//           variants={fadeUp}
//           transition={{ delay: 1 }}
//         >
//           Zonke helps you grow your business with digital wallet payments, cashback campaigns, and real-time sales tracking — all from one dashboard.
//         </motion.p>
//       </div>

//       {/* Button - appears last */}
//       <motion.div 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ margin: "-50px" }}
//         variants={fadeUp}
//         transition={{ delay: 1.3 }}
//       >
//         <Button 
//           link="#"
//           text="Register Your Business"
//           className="w-full md:w-auto"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default page;


// import React from "react";
// import { motion } from "framer-motion";
// import Button from "../../../components/Button/page";

// const page = () => {
//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { 
//         duration: 0.6, 
//         ease: "easeOut" 
//       }
//     }
//   };

//   return (
//     <motion.div
//       className='px-[5%] py-12 overflow-x-clip h-screen flex flex-col gap-6 justify-center'
//       style={{
//         backgroundImage: `url('/page2_bg1.webp')`,
//         backgroundSize: "100% 100%",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ margin: "-50px" }}
//       variants={container}
//     >
//       <motion.div className='flex flex-col md:w-[40%]'>
//         <motion.h1 
//           className='text-[40px] text-white font-semibold'
//           variants={fadeUp}
//         >
//           Grow Your Business. <br />
//           <motion.span 
//             className='font-normal'
//             variants={fadeUp}
//           >
//             Get Discovered
//           </motion.span>
//         </motion.h1>
        
//         <motion.p 
//           className='text-[20px] text-white'
//           variants={fadeUp}
//         >
//           Zonke helps you grow your business with digital wallet payments, cashback campaigns, and real-time sales tracking — all from one dashboard.
//         </motion.p>
//       </motion.div>

//       <motion.div variants={fadeUp}>
//         <Button 
//           link="#"
//           text="Register Your Business"
//           className="w-full md:w-auto"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default page;

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
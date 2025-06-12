"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.2, // Incremental delay based on column index
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const links = [
    {
      id: "1",
      text: "Pre Register",
      link: "#",
    },
    {
      id: "2",
      text: "Zonke for Business",
      link: "/Business",
    },
    {
      id: "3",
      text: "Contact Us",
      link: "/Contact",
    },
  ];

  return (
    <motion.div
      className="bg-cover bg-no-repeat bg-center text-white overflow-x-clip overflow-hidden"
      style={{
        backgroundImage: `url('/footer_bg.webp')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-50px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column (first, no delay) */}
        <motion.div
          custom={0} // 0 index for first column
          variants={columnVariants}
          className="space-y-4"
        >
          <motion.h3
            className="text-[20px] font-semibold"
            variants={itemVariants}
          >
            Company
          </motion.h3>
          <ul className="space-y-2 text-[16px]">
            {links.map((item) => (
              <motion.li key={item.id} variants={itemVariants} custom={item.id}>
                <a className="hover:border-b-1" href={item.link}>
                  {item.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Middle Column (0.2s delay) */}
        <motion.div
          custom={1} // 1 index for second column
          variants={columnVariants}
          className="space-y-4"
        >
          <motion.h3
            className="text-[20px] font-semibold"
            variants={itemVariants}
          >
            Legal & Compliance
          </motion.h3>
          <ul className="space-y-2 text-[16px]">
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "POPIA Compliance",
              "AML & Fraud Prevention Policy",
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants} custom={index}>
                <a className="hover:border-b-1" href="#">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column (0.4s delay) */}
        <motion.div
          custom={2} // 2 index for third column
          variants={columnVariants}
          className="flex flex-col justify-between items-start md:items-end text-right space-y-4"
        >
          {/* <div>
            <motion.h2
              className="text-[40px] font-semibold"
              variants={itemVariants}
            >
              Join Zonke
            </motion.h2>
            <motion.p
              className="text-[20px] text-left md:text-right"
              variants={itemVariants}
            >
              Join the Waitlist
            </motion.p>
          </div> */}
          <motion.div className="text-[20px]" variants={itemVariants}>
            <p>Email: support@zonkepay.com</p>
            <p className="text-left">Phone: +27 12345 12345</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar (0.6s delay) */}
      <motion.div
        custom={3} // 3 index for bottom bar
        variants={columnVariants}
        className="border-t border-white/30 py-4 px-6 text-[12px] flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto"
      >
        <motion.p variants={itemVariants}>
          Copyright © 2025 Universal Equity Ventures Inc. All rights reserved.
        </motion.p>
        {/* <motion.p variants={itemVariants}>
          Zonke is a registered trademark in South Africa.
        </motion.p> */}
      </motion.div>
    </motion.div>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <div
//       className="bg-cover bg-no-repeat bg-center text-white"
//       style={{ backgroundImage: `url('/footer_bg.png')` }}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Left Column */}
//         <div>
//           <h3 className="text-[20px] font-semibold mb-4">Company</h3>
//           <ul className="space-y-2 text-[16px]">
//             <li><a className="hover:border-b-1" href="#">About Zonke</a></li>
//             <li><a className="hover:border-b-1" href="#">Zonke for Business</a></li>
//             <li><a className="hover:border-b-1" href="#">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Middle Column */}
//         <div>
//           <h3 className="text-[20px] font-semibold mb-4">Legal & Compliance</h3>
//           <ul className="space-y-2 text-[16px]">
//             <li ><a className="hover:border-b-1" href="#">Terms & Conditions</a></li>
//             <li><a className="hover:border-b-1" href="#">Privacy Policy</a></li>
//             <li><a className="hover:border-b-1" href="#">POPIA Compliance (South Africa-specific)</a></li>
//             <li><a className="hover:border-b-1" href="#">AML & Fraud Prevention Policy</a></li>
//           </ul>
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col justify-between items-start md:items-end text-right">
//           <div>
//             <h2 className="text-[40px] font-semibold">Join Zonke</h2>
//             <p className="text-[20px] text-left md:text-right">Join the Waitlist</p>
//           </div>
//           <div className="mt-6 text-[20px]">
//             <p>Email: zonkeyhelp@gmai.com</p>
//             <p className="md:text-left ">Phone: +27 12345 12345</p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/30 py-4 px-6 text-[12px] flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
//         <p>© 2025 Zonke Technologies (Pty) Ltd. All rights reserved.</p>
//         <p>Zonke is a registered trademark in South Africa.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

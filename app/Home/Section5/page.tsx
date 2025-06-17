"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Partner1 from "../../../assets/Partner1.jpg";
import Partner2 from "../../../assets/Partner2 1.png";

// Data
const Cards = [
  {
    id: "1",
    title: "PCI DSS Compliant",
    description:
      "Your payment data is handled using globally recognized security standards.",
  },
  {
    id: "2",
    title: "SSL Secured",
    description:
      "All transactions and personal information are protected with end-to-end encryption.",
  },
  {
    id: "3",
    title: "Verified Merchant Onboarding",
    description:
      "Every business listed on Zonke undergoes strict verification for authenticity and compliance.",
  },
];

const companies = [
  { name: "Zonkey", logo: Partner1, id: "1" },
  { name: "Zonkey", logo: Partner2, id: "2" },
];

const TrustPage = () => {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-x-clip px-[5%] py-20 overflow-hidden flex flex-col gap-6">
      {/* Top red banner */}
      <motion.div
        className="flex md:flex-row flex-col justify-between items-start p-6 rounded-[8px] bg-[#A32C14] md:gap-6 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px", once: true }}
        variants={container}
      >
        <motion.h2
          className="text-white text-[24px] font-semibold md:w-1/4"
          variants={fadeUp}
        >
          Built on Trust. {" "}<br /> Backed by Security.
        </motion.h2>
        <motion.p className="text-[#FFFEF3] text-[20px]" variants={fadeUp}>
          Zonke is committed to providing a safe, secure, and reliable platform,
          for both consumers and businesses.
        </motion.p>
      </motion.div>

      {/* Key Trust Markers section */}
      <motion.div
        className="flex flex-col gap-4 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px", once: true }}
        variants={container}
      >
        <motion.h2
          className="text-[#0077B6] text-[20px] font-semibold"
          variants={fadeUp}
        >
          Key Trust Markers
        </motion.h2>

        <motion.div
          className="flex flex-wrap flex-row gap-6"
          variants={container}
        >
          {Cards.map((card) => (
            <motion.div key={card.id} className="md:w-[30%]" variants={fadeIn}>
              <motion.h3
                className="font-semibold text-[#3D3D3D]"
                variants={fadeUp}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-[14px] text-[#3D3D3D]"
                variants={fadeUp}
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Our Partners section */}
      <motion.div
        className="flex flex-col gap-2 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px", once: true }}
        variants={container}
      >
        <motion.h2
          className="text-[#A32C14] text-[32px] font-semibold"
          variants={fadeUp}
        >
          Our Partners
        </motion.h2>
        <motion.div
          className="p-6 h-[100px] overflow-hidden relative flex justify-center"
          variants={fadeIn}
        >
          <div className="flex items-center h-full gap-12">
            {companies.map((company) => (
              <div 
                key={company.id} 
                className="flex-shrink-0 h-full flex items-center px-4"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={150}
                  height={100}
                  className="object-contain h-[100%] w-auto max-w-[150px] pointer-events-none"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TrustPage;


// "use client";

// import React, { useRef, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// // import Zonkey from "../../../assets/Logo.webp";
// import Partner1 from "../../../assets/Partner1.jpg";
// import Partner2 from "../../../assets/Partner2 1.png";

// // Data
// const Cards = [
//   {
//     id: "1",
//     title: "PCI DSS Compliant",
//     description:
//       "Your payment data is handled using globally recognized security standards.",
//   },
//   {
//     id: "2",
//     title: "SSL Secured",
//     description:
//       "All transactions and personal information are protected with end-to-end encryption.",
//   },
//   {
//     id: "3",
//     title: "Verified Merchant Onboarding",
//     description:
//       "Every business listed on Zonke undergoes strict verification for authenticity and compliance.",
//   },
// ];

// const companies = [
//   { name: "Zonkey", logo: Partner1, id: "1" },
//   { name: "Zonkey", logo: Partner2, id: "2" },
//   // { name: "Zonkey", logo: Zonkey, id: "3" },
//   // { name: "Zonkey", logo: Zonkey, id: "4" },
// ];

// // Custom hook for smooth infinite scroll
// const useInfiniteScroll = (speed = 2) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number | null>(null);
//   const pausedRef = useRef<boolean>(false);
//   const directionRef = useRef<number>(1); // 1 for right, -1 for left

//   const animate = useCallback(() => {
//     if (!scrollerRef.current || pausedRef.current) {
//       animationRef.current = requestAnimationFrame(animate);
//       return;
//     }

//     const scroller = scrollerRef.current;
//     const container = containerRef.current;
//     if (!scroller || !container) return;

//     const scrollWidth = scroller.scrollWidth;
//     const clientWidth = container.clientWidth;
//     const maxScroll = scrollWidth - clientWidth;
//     const currentScroll = scroller.scrollLeft;

//     // If we've scrolled all the way to the end, reset to start seamlessly
//     if (currentScroll >= maxScroll - 1) {
//       scroller.scrollLeft = 0;
//     } else if (currentScroll <= 0) {
//       scroller.scrollLeft = maxScroll - 1;
//     } else {
//       scroller.scrollLeft += speed * directionRef.current;
//     }

//     animationRef.current = requestAnimationFrame(animate);
//   }, [speed]);

//   useEffect(() => {
//     const container = containerRef.current;
//     const scroller = scrollerRef.current;
//     if (!container || !scroller) return;

//     // Duplicate the content for seamless looping
//     const content = scroller.innerHTML;
//     scroller.innerHTML = content + content + content;
//     scroller.scrollLeft = scroller.scrollWidth / 3;

//     const handleMouseEnter = () => {
//       pausedRef.current = true;
//     };

//     const handleMouseLeave = () => {
//       pausedRef.current = false;
//     };

//     animationRef.current = requestAnimationFrame(animate);
//     container.addEventListener('mouseenter', handleMouseEnter);
//     container.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       container.removeEventListener('mouseenter', handleMouseEnter);
//       container.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, [animate]);

//   return { containerRef, scrollerRef };
// };

// const TrustPage = () => {
//   // Control speed here (higher number = faster)
//   const { containerRef, scrollerRef } = useInfiniteScroll(1);

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
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="overflow-x-clip px-[5%] py-20 overflow-hidden flex flex-col gap-6">
//       {/* Top red banner */}
//       <motion.div
//         className="flex md:flex-row flex-col justify-between items-start p-6 rounded-[8px] bg-[#A32C14] md:gap-6 gap-4"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ margin: "-50px", once: true }}
//         variants={container}
//       >
//         <motion.h2
//           className="text-white text-[24px] font-semibold md:w-1/4"
//           variants={fadeUp}
//         >
//           Built on Trust. {" "}<br /> Backed by Security.
//         </motion.h2>
//         <motion.p className="text-[#FFFEF3] text-[20px]" variants={fadeUp}>
//           Zonke is committed to providing a safe, secure, and reliable platform,
//           for both consumers and businesses.
//         </motion.p>
//       </motion.div>

//       {/* Key Trust Markers section */}
//       <motion.div
//         className="flex flex-col gap-4 mt-12"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ margin: "-50px", once: true }}
//         variants={container}
//       >
//         <motion.h2
//           className="text-[#0077B6] text-[20px] font-semibold"
//           variants={fadeUp}
//         >
//           Key Trust Markers
//         </motion.h2>

//         <motion.div
//           className="flex flex-wrap flex-row gap-6"
//           variants={container}
//         >
//           {Cards.map((card) => (
//             <motion.div key={card.id} className="md:w-[30%]" variants={fadeIn}>
//               <motion.h3
//                 className="font-semibold text-[#3D3D3D]"
//                 variants={fadeUp}
//               >
//                 {card.title}
//               </motion.h3>
//               <motion.p
//                 className="text-[14px] text-[#3D3D3D]"
//                 variants={fadeUp}
//               >
//                 {card.description}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Our Partners section */}
//       <motion.div
//         className="flex flex-col gap-2 mt-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ margin: "-50px", once: true }}
//         variants={container}
//       >
//         <motion.h2
//           className="text-[#A32C14] text-[32px] font-semibold"
//           variants={fadeUp}
//         >
//           Our Partners
//         </motion.h2>
//         <motion.div
//           className="p-6 h-[100px] overflow-hidden relative"
//           variants={fadeIn}
//           ref={containerRef}
//         >
//           <div 
//             ref={scrollerRef}
//             className="flex items-center h-full w-full overflow-hidden scroll-smooth"
//             style={{ scrollBehavior: 'smooth' }}
//           >
//             <div className="flex items-center h-full gap-12">
//               {[...companies, ...companies, ...companies].map((company, index) => (
//                 <div 
//                   key={`${company.id}-${index}`} 
//                   className="flex-shrink-0 h-full flex items-center px-4"
//                 >
//                   <Image
//                     src={company.logo}
//                     alt={company.name}
//                     width={150}
//                     height={100}
//                     className="object-contain h-[100%] w-auto max-w-[150px]"
//                     priority={index < 8}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Gradient overlays to hide the edges */}
//           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 " />
//           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default TrustPage;


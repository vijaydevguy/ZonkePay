"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Zonkey from "../../../assets/Logo.webp";

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
  { name: "Zonkey", logo: Zonkey, id: "1" },
  { name: "Zonkey", logo: Zonkey, id: "2" },
  { name: "Zonkey", logo: Zonkey, id: "3" },
  { name: "Zonkey", logo: Zonkey, id: "4" },
];

// Optimized infinite scroll hook
const useInfiniteScroll = (speed = 1) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollPosRef = useRef(0);
  const pausedRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  const animate = useCallback(() => {
    if (!scrollerRef.current || pausedRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    scrollPosRef.current += speed;
    const scroller = scrollerRef.current;
    const contentWidth = scroller.scrollWidth / 3;

    if (scrollPosRef.current < contentWidth * 2) {
      scroller.scrollTo({
        left: scrollPosRef.current,
        behavior: 'auto'
      });
    } else {
      scrollPosRef.current = contentWidth;
      scroller.scrollTo({
        left: scrollPosRef.current,
        behavior: 'auto'
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [speed]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const initScroll = () => {
      const contentWidth = scroller.scrollWidth / 3;
      scrollPosRef.current = contentWidth;
      scroller.scrollLeft = contentWidth;
      setIsReady(true);
    };

    const images = scroller.querySelectorAll('img');
    if (images.length > 0) {
      Promise.all(Array.from(images).map(img => 
        img.complete ? Promise.resolve() : new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        })
      )).then(initScroll);
    } else {
      initScroll();
    }

    return () => {
      setIsReady(false);
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      pausedRef.current = true;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      pausedRef.current = false;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleMouseEnter);
    container.addEventListener('touchend', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleMouseEnter);
      container.removeEventListener('touchend', handleMouseLeave);
    };
  }, [animate, isReady]);

  return { containerRef, scrollerRef };
};

const TrustPage = () => {
  const { containerRef, scrollerRef } = useInfiniteScroll(1.2);

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
    <div className="overflow-x-clip px-[5%] py-12 overflow-hidden flex flex-col gap-6">
      {/* Top red banner */}
      <motion.div
        className="flex md:flex-row flex-col justify-between items-start p-6 rounded-[8px] bg-[#A32C14] md:gap-6 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px", once: true }}
        variants={container}
      >
        <motion.h2
          className="text-white text-[24px] font-semibold"
          variants={fadeUp}
        >
          Built on Trust. Backed by Security.
        </motion.h2>
        <motion.p className="text-white text-[20px]" variants={fadeUp}>
          Zonke is committed to providing a safe, secure, and reliable platform,
          for both consumers and businesses.
        </motion.p>
      </motion.div>

      {/* Key Trust Markers section */}
      <motion.div
        className="flex flex-col gap-4"
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
        className="flex flex-col gap-2"
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
          className="p-6 h-[120px] overflow-hidden relative"
          variants={fadeIn}
          ref={containerRef}
        >
          <div 
            ref={scrollerRef}
            className="flex items-center h-full w-full overflow-hidden"
          >
            <div className="flex items-center h-full gap-16 min-w-max">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div 
                  key={`${company.id}-${index}`} 
                  className="flex-shrink-0 h-full flex items-center px-4"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={160}
                    height={80}
                    className="object-contain h-[80px] w-auto max-w-[160px]"
                    priority={index < 8}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/default-logo.png';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TrustPage;

// import React from "react";

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
// const page = () => {
//   return (
//     <div className="overflow-x-clip px-[5%] py-12 overflow-hidden flex flex-col gap-6">
//       <div className="flex md:flex-row flex-col justify-between items-start p-6 rounded-[8px] bg-[#A32C14] md:gap-6 gap-4">
//         <h2 className="text-white text-[24px] font-semibold">
//           Built on Trust. Backed by Security.
//         </h2>
//         <p className="text-white text-[20px]">
//           Zonke is committed to providing a safe, secure, and reliable platform,
//           for both consumers and businesses.
//         </p>
//       </div>

//       <div className="flex flex-col gap-4">
//         <h2 className="text-[#0077B6] text-[20px] font-semibold">Key Trust Markers</h2>

//         <div className="flex flex-wrap flex-row gap-6">
//           {Cards.map((card) => (
//             <div key={card.id}
//             className="md:w-[30%]"
//             >
//               <h3 className="font-semibold text-[#3D3D3D]">{card.title}</h3>
//               <p className="text-[14px] text-[#3D3D3D]">{card.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col gap-2">
//           <h2 className="text-[#A32C14] text-[32px] font-semibold">Our Partners</h2>
//           <div className="border border-[#A32C14] rounded-[8px] p-6 h-[300px]">

//           </div>
//       </div>

//     </div>
//   );
// };

// export default page;

import React from 'react'
import Section1 from "./Section1/page";
import Section2 from "./Section2/page";
import Section3 from "./Section3/page";
import Section4 from "./Section4/page";
import Section5 from "./Section5/page";
import Section6 from "./Section6/page";
import Footer from "../../components/Footer/page";
// import Waitlist from "../../components/Waitlist/page";

//SEO start 
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZonkePay - Seamless Payments for Your Business',
  description: 'ZonkePay enables fast, secure, and reliable payment solutions for businesses of all sizes. Accept payments, manage transactions, and grow your business with ease.',
  keywords: ['ZonkePay', 'Payments', 'Business', 'Payment Solutions', 'Secure Payments', 'Online Payments'],
  openGraph: {
    title: 'ZonkePay - Seamless Payments for Your Business',
    description: 'ZonkePay enables fast, secure, and reliable payment solutions for businesses of all sizes.',
    url: 'https://zonkepay.com',
    siteName: 'ZonkePay',
    type: 'website',
    images: [
      {
        url: 'https://zonkepay.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZonkePay',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'ZonkePay - Seamless Payments for Your Business',
  //   description: 'ZonkePay enables fast, secure, and reliable payment solutions for businesses of all sizes.',
  //   images: ['https://zonkepay.com/og-image.png'],
  // },
}
//SEO end

const page = () => {
  return (
    <>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        {/* <Waitlist /> */}
        <Footer />
    </>
  )
}

export default page
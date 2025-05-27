import React from 'react'

import Navbar from "../../components/Navbar/page";;
import Section1 from "../Page2/Section1/page";
import Section2 from "../Page2/Section2/page";
import Section3 from "../Page2/Section3/page";
import Section4 from "../Page2/Section4/page";
import Section5 from "../Page2/Section5/page";
import Section6 from "../Page2/Section6/page";
import Footer from "../../components/Footer/page";

const page = () => {
  return (
    <>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
    </>
  )
}

export default page
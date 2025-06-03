import React from 'react'

import Navbar from "../../components/Navbar/page";;
import Section1 from "../Business/Section1/page";
import Section2 from "../Business/Section2/page";
import Section3 from "../Business/Section3/page";
import Section4 from "../Business/Section4/page";
import Section5 from "../Business/Section5/page";
import Section6 from "../Business/Section6/page";
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
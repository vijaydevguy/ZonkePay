import React from 'react'

import Navbar from "../../components/Navbar/page";;
import Section1 from "./Section1/page";
import Section2 from "./Section2/page";
import Section3 from "./Section3/page";
import Section4 from "./Section4/page";
import Section5 from "./Section5/page";
import Section6 from "./Section6/page";
// import Section7 from "./Section7/page";
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
        {/* <Section7 /> */}
        <Section6 />
        <Footer />
    </>
  )
}

export default page
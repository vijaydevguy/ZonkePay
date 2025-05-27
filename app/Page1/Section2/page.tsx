import React from "react";

import Button from "../../../components/Button/page";

import globe from "../../../assets/Page1_Section2_img1.png";
import img1 from "../../../assets/Page1_Section2_smallimg1.png";
import img2 from "../../../assets/Page1_Section2_smallimg2.png";
import img3 from "../../../assets/Page1_Section2_smallimg3.png";
import img4 from "../../../assets/Page1_Section2_smallimg4.png";
import Image from "next/image";

const images =[
    {
        id:"1",
        img: img1,
        title: "Pay instantly with your digital wallet",
    },
    {
        id:"2",
        img: img2,
        title: "Pay instantly with your digital wallet",
    },
    {
        id:"3",
        img: img3,
        title: "Pay instantly with your digital wallet",
    },
    {
        id:"4",
        img: img4,
        title: "Pay instantly with your digital wallet",
    }
]

const page = () => {
  return (
    <div className="px-[5%] overflow-x-clip pt-12 bg-[#FFFEF3] flex flex-col items-center justify-center gap-6">
      {/* top */}
      <div className="flex md:flex-row flex-col gap-6 items-center jusitfy-center ">
        <div className="md:w-[80%]">
          <h2 className="font-semibold text-[24px] ">Why Thousands Across South Africa <span className="text-[#FA5117]">Trust Zonke</span></h2>
          <p className="text-[20px] text-[#8B8A85]">
            From everyday shoppers to growing local businesses, Zonke connects
            people, places, and payments — making discovery, transactions, and
            rewards smarter and more seamless for everyone.
          </p>
        </div>

        {/* <button className="border border-[#FA5117] px-[18px] py-[10px] rounded-[8px] text-[#FA5117]">
          Register Your Business
        </button> */}

        <Button 
            text="Register Your Business"
            link="#"
            secondary
            className="w-full md:w-auto"
        />
      </div>

      {/* bottom */}
      <div className="flex md:flex-row flex-col justify-between items-center overflow-hidden">
        {/* left */}
        <div className="flex flex-wrap justify-center items-center gap-12 lg:w-[40%] md:w-[50%] w-full">
            {images.map((image) => (
                <div key={image.id} className="lg:w-[200px] md:w-[120px] w-[150px]">
                    <Image 
                    src={image.img}
                    alt={image.title}
                    className="pointer-events-none"
                    />

                    <p className="text-[16px]">{image.title}</p>
                </div>
            ))}
        </div>

        {/* right */}
        <div className=" md:w-[50%] w-full md:h-[400px] h-full flex items-center
          justify-center relative overflow-y-clip">
            <Image
            src={globe}
            alt="globe"
            className="w-[800px] relative  lg:top-48 pointer-events-none"
            />
        </div>
      </div>
    </div>
  );
};

export default page;

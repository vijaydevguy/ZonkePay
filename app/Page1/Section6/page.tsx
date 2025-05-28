import React from "react";

const page = () => {
  return (
    <div
      className="flex flex-col gap-2 lg:h-[600px] md:h-[400px] h-[300px]"
      style={{
        backgroundImage: `url('/page1_section5_bg2.webp')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default page;

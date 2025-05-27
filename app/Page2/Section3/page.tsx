import React from "react";

const page = () => {
  const Cards = [
    {
      id: "1",
      bg: "/page2_section3_img1.png",
      title: "Register your Business",
      description: "Smart Onboarding in minutes",
    },
    {
      id: "2",
      bg: "/page2_section3_img2.png",
      title: "Start Accepting Wallet Payments",
      description: "QR code or payment link.",
    },
    {
      id: "3",
      bg: "/page2_section3_img3.png",
      title: "Track your Earnings",
      description: "Use the Zonke Merchant Console",
    },
  ];

  return (
    <>
      <div className="px-[5%] py-12 overflow-x-clip overflow-hidden flex flex-col gap-6 bg-[#2D6E62]">
        {/* top */}
        <div>
          <h2 className="text-[32px] text-white">
            Onboard. <br /> Go Live.{" "}
            <span className="font-semibold">Get Paid.</span>
          </h2>
        </div>

        {/* bottom */}
        <div className="flex md:flex-row flex-col gap-6">
          {Cards.map((card) => (
            <div key={card.id} className="flex flex-col gap-4">
              <div
                style={{
                  backgroundImage: `url('${card.bg}')`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="h-[250px] lg:w-[350px] md:w-[220px] rounded-[8px] overflow-hidden"
              ></div>

              <div className="flex flex-col ">
                <h2 className="font-semibold text-white">{card.title}</h2>
                <p className="text-[14px] text-white">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('/page2_section3_bg1.png')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[150px]"
      ></div>
    </>
  );
};

export default page;

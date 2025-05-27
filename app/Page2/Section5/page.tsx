import React from "react";

const page = () => {
  const Cards = [
    {
      id: "1",
      text: "View real-time earnings and payouts",
    },
    {
      id: "2",
      text: "Create and manage cashback deals",
    },
    {
      id: "3",
      text: "Withdraw funds directly to your bank",
    },
    {
      id: "4",
      text: "Track transactions with filters and exports",
    },
    {
      id: "5",
      text: "Monitor customer activity and visits",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url('/page2_section5_bg.png')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" px-[5%] py-12 overflow-x-clip flex flex-col gap-6"
    >
      {/* top */}
      <div>
        <h2 className="text-[32px] text-white">
          Your Business, <span>Fully Digital</span>
        </h2>
        <p className="text-[20px] text-white">
          Manage your transactions, offers, and wallet{" "}
          <span className="text-[20px] font-semibold">all in one place.</span>
        </p>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-[20px]">Key Features:</h2>
        <div className="flex flex-wrap gap-6">
          {Cards.map((card) => (
            <div key={card.id} className="w-full md:w-auto">
              <p className='text-["#A93922"] rounded-full bg-white py-[12px] px-[14px] w-full'>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

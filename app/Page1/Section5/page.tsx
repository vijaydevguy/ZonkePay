import React from "react";

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
const page = () => {
  return (
    <div className="overflow-x-clip px-[5%] py-12 overflow-hidden flex flex-col gap-6">
      <div className="flex md:flex-row flex-col justify-between items-start p-6 rounded-[8px] bg-[#A32C14] md:gap-6 gap-4">
        <h2 className="text-white text-[24px] font-semibold">
          Built on Trust. Backed by Security.
        </h2>
        <p className="text-white text-[20px]">
          Zonke is committed to providing a safe, secure, and reliable platform,
          for both consumers and businesses.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-[#0077B6] text-[20px] font-semibold">Key Trust Markers</h2>

        <div className="flex flex-wrap flex-row gap-6">
          {Cards.map((card) => (
            <div key={card.id} 
            className="md:w-[30%]"
            >
              <h3 className="font-semibold text-[#3D3D3D]">{card.title}</h3>
              <p className="text-[14px] text-[#3D3D3D]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
          <h2 className="text-[#A32C14] text-[32px] font-semibold">Our Partners</h2>
          <div className="border border-[#A32C14] rounded-[8px] p-6 h-[300px]">

          </div>
      </div>

      
    </div>
  );
};

export default page;

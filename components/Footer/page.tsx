import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center text-white"
      style={{ backgroundImage: `url('/footer_bg.png')` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-[16px]">
            <li><a className="hover:border-b-1" href="#">About Zonke</a></li>
            <li><a className="hover:border-b-1" href="#">Zonke for Business</a></li>
            <li><a className="hover:border-b-1" href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">Legal & Compliance</h3>
          <ul className="space-y-2 text-[16px]">
            <li ><a className="hover:border-b-1" href="#">Terms & Conditions</a></li>
            <li><a className="hover:border-b-1" href="#">Privacy Policy</a></li>
            <li><a className="hover:border-b-1" href="#">POPIA Compliance (South Africa-specific)</a></li>
            <li><a className="hover:border-b-1" href="#">AML & Fraud Prevention Policy</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between items-start md:items-end text-right">
          <div>
            <h2 className="text-[40px] font-semibold">Join Zonke</h2>
            <p className="text-[20px] text-left md:text-right">Join the Waitlist</p>
          </div>
          <div className="mt-6 text-[20px]">
            <p>Email: zonkeyhelp@gmai.com</p>
            <p className="md:text-left ">Phone: +27 12345 12345</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-4 px-6 text-[12px] flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>© 2025 Zonke Technologies (Pty) Ltd. All rights reserved.</p>
        <p>Zonke is a registered trademark in South Africa.</p>
      </div>
    </div>
  );
};

export default Footer;

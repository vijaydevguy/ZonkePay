import React from 'react'

import Button from "../../../components/Button/page";

const page = () => {
  return (
    <div
    className='px-[5%] py-12 overflow-x-clip h-screen flex flex-col gap-6 justify-center'
    style={{
        backgroundImage: `url('/page2_bg1.png')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
        <div className='flex flex-col md:w-[40%] '>
            <h1 className='text-[40px] text-white font-semibold'>Grow Your Business. <br /><span className='font-normal'>Get Discovered</span></h1>
            <p className='text-[20px] text-white'>Zonke helps you grow your business with digital wallet payments, cashback campaigns, and real-time sales tracking — all from one dashboard.</p>
        </div>

        <div>
            <Button 
            link="#"
            text= "Register Your Business"
            className="w-full md:w-auto"
            />
        </div>
    </div>
  )
}

export default page
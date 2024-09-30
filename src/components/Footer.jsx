import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex  bg-[#F8F9FA] px-5 md:px-20 py-16'>
                <div className='basis-1/2'>
                    <p className='epilogue-web-bold text-[20px] leading-[30px]'>
                        BLPR
                    </p>
                    <p className='font-normal text-[13px] leading-[23px]'>
                        Address: 2659 Autostrad St, London, UK <br />
                        Message: support@BLPR.com <br />
                        Phone: 215 - 123 - 4567 <br />
                        Open: Mon - Fri / 9:00 AM - 6:00 PM
                    </p>
                    <div>

                    </div>
                </div>
                <div className='basis-1/2'>
                    <p className='epilogue-web-bold text-[20px] leading-[30px]'>
                        OUR SERVICES
                    </p>
                    <p className='flex flex-col font-normal text-[13px] leading-[23px]'>
                        <span>+ Interior Design</span>
                        <span>+ Architecture Modeling</span>
                        <span>+ Rendering Buildings</span>
                        <span>+ Landscape works</span>
                    </p>
                </div>
            </div>
            <div className='flex justify-between px-20 pb-5'>
                <div className='font-normal text-[18px] leading-[23px] text-[#6F6C90]'>
                    Copyright BLPR. All Rights Reserved
                </div>
                <div className='flex items-center gap-1 font-normal text-[18px] leading-[30px]'>
                    All Rights Reserved |
                    <a href="" className='underline'>
                        Terms and Conditions
                    </a> |
                    <a href="" className='underline'>
                        Privacy Policy
                    </a>
                </div>

            </div>
        </>
    )
}

export default Footer

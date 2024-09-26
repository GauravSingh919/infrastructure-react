import React from 'react'

const Works = () => {
    return (
        <>
            <div className='py-16 bg-[#001F3F]'>
                <div className='container mx-auto px-5'>
                    <div className='flex flex-col text-white'>
                        <div className='font-normal text-sm leading-[22px] text-center'>
                            Our Work Process
                            <p className='epilogue-web-bold text-[53px] leading-[74px] text-center'>How Do We Works</p>
                            <p className='font-normal text-sm leading-[22px] text-center pt-5'>Our approach to infrastructure projects is grounded in meticulous planning, innovative design, and <br />sustainable construction practices. We prioritize:</p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 gap-10 pt-16 md:pt-32'>
                        <div className='flex flex-col items-center text-[#BCC1CA]'>
                            <img src='handshake.svg' alt='' className='w-20 h-20' />
                            <div className='pt-5 epilogue-web-bold text-[20px] leading-[30px] text-center  '>
                                Community Engagement
                                <p className='font-normal text-sm leading-[22px] text-center pt-4'>Collaborating with local stakeholders to understand their needs and ensure our projects serve the community effectively</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-[#BCC1CA]'>
                            <img src='recycle.svg' alt='' className='w-20 h-20' />
                            <div className='pt-5 epilogue-web-bold text-[20px] leading-[30px] text-center '>
                                Sustainability
                                <p className='font-normal text-sm leading-[22px] text-center pt-4'>Incorporating eco-friendly materials and technologies to minimize environmental impact and promote long-term sustainability.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-[#BCC1CA]'>
                            <img src='protection.svg' alt='' className='w-20 h-20' />
                            <div className='pt-5 epilogue-web-bold text-[20px] leading-[30px] text-center '>
                                Quality and Safety
                                <p className='font-normal text-sm leading-[22px] text-center pt-4'>Adhering to the highest standards of quality and safety in all phases of our projects, from design to construction to maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works

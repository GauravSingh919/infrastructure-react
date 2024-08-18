import React, { useState } from 'react';
import AboutUsImage from '/AboutusImage.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const AboutUs = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} >
                <div id='about' className='bg-white py-16 px-5'>
                    <div className='flex flex-col lg:flex-row justify-between container mx-auto gap-10 lg:gap-0'>
                        <div className='flex flex-col items-start'>
                            <div className='font-normal text-[#BCC1CA] text-[15px] leading-[24px]'>
                                About Us
                            </div>
                            <div className='epilogue-web-bold text-[51px] leading-[72px] text-wrap'>
                                We Building <br />
                                Everything Best <br />
                                That You Needed
                            </div>
                            <div className='font-normal text-sm text-[#BCC1CA] text-wrap'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />
                                tempor incididunt ut tur incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </div>

                            <div className='grid grid-cols-2 gap-x-20 gap-y-10 pt-10'>
                                <div className='flex flex-col'>
                                    <p className='epilogue-web-bold text-[53px] leading-[54.32px]'>
                                        {counterOn && <CountUp start={0} end={25} duration={3} delay={0} />}+
                                    </p>
                                    <span className='text-[#BCC1CA] text-[15px] leading-[18.15px]'>Years of Experience</span>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='epilogue-web-bold text-[53px] leading-[54.32px]'>
                                        {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}+
                                    </p>
                                    <span className='text-[#BCC1CA] text-[15px] leading-[18.15px]'>Employees</span>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='epilogue-web-bold text-[53px] leading-[54.32px]'>
                                        {counterOn && <CountUp start={0} end={250} duration={2} delay={0} />}+
                                    </p>
                                    <span className='text-[#BCC1CA] text-[15px] leading-[18.15px]'>Projects Completed</span>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='epilogue-web-bold text-[53px] leading-[54.32px]'>
                                        {counterOn && <CountUp start={0} end={20} duration={3} delay={0} />}k+
                                    </p>
                                    <span className='text-[#BCC1CA] text-[15px] leading-[18.15px]'>Installed Ikea Kitchens</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={AboutUsImage} alt='AboutUsImage' />
                        </div>
                    </div>
                </div>
            </ScrollTrigger >
        </>
    );
}

export default AboutUs;

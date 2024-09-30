import React from 'react'
import BannerImage from "/BannerInfra.jpg"
const Banner = () => {
    return (
        <>
            <div id='home' className='bannerPosition relative h-screen md:h-screen'>
                <div className='bgBlend h-screen md:h-screen overflow-x-hidden bg-opacity-75 bg-black' >
                    <div>
                        <img src={BannerImage} alt='Banner' className='object-top absolute w-full bg-cover h-screen object-cover -z-[3]' />
                    </div>
                    <div className='bgText container mx-auto flex justify-center lg:justify-start items-center h-full px-5'>
                        <div className='flex flex-col items-start text-white'>
                            <p className='text-[16px] leading-[24px] sm:pt-4 md:pt-4  xs:pt-2 titillium-web-semibold'>Welcome to BLPR</p>
                            <p className='titillium-web-semibold text-[70px] leading-[84px]'>Crafting the Foundations <br /> of the Future
                            </p>
                            <p className='titillium-web-regular text-wrap pt-4'>At BLPR, we believe that every space has a story to tell. Our mission is to turn your <br /> vision into reality, creating spaces that are both beautiful and functional
                            </p>
                            <div className='flex gap-5 pt-4'>
                                <button className='bg-[#F7931B] text-white py-[10px] px-[26px] rounded-md'>
                                    Get Started
                                </button>
                                <button className='bg-[#FDE9D1] border border-[#F7931B]  text-[#F7931B] py-[10px] px-[26px] rounded-md'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Banner

import React from 'react'
import InnovationImage from "/innovation.jpg"
const Innovation = () => {
    return (
        <>
            <div className='relative bgBlend h-screen lg:h-[539px]  overflow-x-hidden bg-opacity-60 bg-black'>
                <img src={InnovationImage} alt='Image' className='absolute w-full bg-cover h-screen object-cover lg:h-[539px] -z-[3]' />

                <div className='flex flex-col justify-center items-start h-full text-white container mx-auto px-5'>
                    <p className='titillium-web-regular text-base'>
                        Innovation Starts Here
                    </p>
                    <p className='titillium-web-semibold text-[60px] leading-[72px] pt-4'>
                        Consultation Over 25 Years <br />in the INDIA Since 1975
                    </p>
                    <p className='titillium-web-regular text-[24px] leading-[28.8px] pt-4'>
                        At BLPR , we're not just constructing but we're shaping the future. With a <br /> commitment to excellence and a passion for innovation, we specialize in a wide array <br /> of projects that redefine the landscape of modern infrastructure.
                    </p>
                    <div className='pt-10'>
                        <button className='bg-[#F7931B] text-white py-[10px] px-[26px] rounded-md'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Innovation

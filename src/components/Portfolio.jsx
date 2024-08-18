import React, { useState } from 'react'

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(0); // Default to the first tab
    const tabs = ['All', 'Hospitality', 'Interior', 'Libraries', 'Residential', 'Royal', 'Theaters'];
    const images = [
        '/all.png', // Image for 'All'
        '/images/hospitality.jpg',
        '/images/interior.jpg',
        '/images/libraries.jpg',
        '/images/residential.jpg',
        '/images/royal.jpg',
        '/images/theaters.jpg'
    ];
    return (
        <>
            <div id='portfolio' className='container mx-auto px-5 py-16'>
                <div className='flex flex-col pt-10'>
                    <div className=' epilogue-web-bold text-[52px] leading-[53.3px]'>
                        Portfolio

                        <p className='lato-regular text-[20px] leading-[29px] pt-5'>
                            Our portfolio showcases a diverse range of projects that highlight our commitment to quality and attention to detail. Each project is a testament to our ability to create spaces that are both stylish and practical.
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4 overflow-x-scroll md:overflow-clip py-5">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`py-2 px-4 ${activeTab === index
                                ? 'font-bold text-black'
                                : 'font-normal text-[#BCC1CA]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="">
                <img
                    src={images[activeTab]}
                    alt={tabs[activeTab]}
                    className="w-full lg:h-[488px]"
                />
            </div>
        </>
    )
}

export default Portfolio

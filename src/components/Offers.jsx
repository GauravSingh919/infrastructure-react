import React, { useState } from 'react'
import infrastructure from '/infrastructure.svg'
import store from '/store.svg'
import light from '/project-management.svg'
import warehouse from '/warehouse.svg'
import desk from '/office-desk.svg'
import construction from "/construction-plan.svg"
const Offers = () => {
    const [offers, setOffers] = useState([
        {
            id: 1,
            title: "Infrastructure Projects",
            description: "Building essential community infrastructure to enhance connectivity and quality of life",
            img: infrastructure,
            links: "Learn More"
        },
        {
            id: 2,
            title: "Store Outlets",
            description: "Transforming retail spaces into engaging, memorable experiences for customers.",
            img: store,
            links: "Learn More"
        },
        {
            id: 3,
            title: "Project Management Consultancy",
            description: "Guiding projects from concept to completion with expert management and oversight.",
            img: light,
            links: "Learn More"
        },
        {
            id: 4,
            title: "Fit-Out Projects",
            description: "Customizing spaces to perfection, tailored to specific needs and preferences.",
            img: construction,
            links: "Learn More"
        },
        {
            id: 5,
            title: "Office Design",
            description: "Creating workspaces that foster productivity, creativity, and success",
            img: desk,
            links: "Learn More"
        },
        {
            id: 6,
            title: "Warehouses and Factories",
            description: "Designing efficient, safe, and productive industrial spaces to drive industry forward.",
            img: warehouse,
            links: "Learn More"
        },
    ])
    return (
        <>
            <div id='services' className='container px-5 mx-auto py-16'>
                <div className='text-center epilogue-web-bold pt-10 text-[53px] leading-[74px]'>
                    What Can We Offer
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8'>
                    {offers.map((item, i) => (
                        <div className='p-10 border' key={i} id={item.id}>
                            <div className='flex flex-col'>
                                <div className='epilogue-web-bold text-[21px] leading-[32px]'>
                                    {item.title}
                                </div>
                                <span className='text-[#BCC1CA] text-sm leading-[22px] pt-3'>
                                    {item.description}
                                </span>
                                <img src={item.img} alt='Offers1' className='h-14 w-14 my-10' />
                                <span className='font-normal text-[15px] leading-[24px]'>
                                    {item.links}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}

export default Offers

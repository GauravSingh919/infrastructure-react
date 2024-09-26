import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
const ClientSection = () => {
    const clientImage = [
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },
        {
            id: 1,
            clientpic: "/direct.png"
        },

    ]
    return (
        <div className='py-16 bg-[#001F3F1F]' id='client'>
            <div className='container mx-auto'>
                <div className='text-sm tracking-wider font-medium'>
                    OUR CLIENTS
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className='basis-1/2 text-[28px] lg:text-[36px] lato-bold tracking-[0.2px] lg:leading-[48px]'>
                        Trusted Partnerships, <br />Proven Success
                    </div>
                    <div className='basis-1/2 text-sm lg:text-[20px] font-sans font-normal text-[#484848] lg:leading-[32px]'>
                        We are proud to collaborate with some of the most respected names in the industry, ensuring that we deliver exceptional financial solutions and services to our clients.
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    freeMode={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper pr-40"
                >
                    {clientImage.map((item, cool) => (
                        <div key={cool}>
                            <SwiperSlide>
                                <img src={item.clientpic} className=' w-24 h-16 lg:w-[120px] lg:h-[78px] object-contain ' alt="Swipes" />
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ClientSection;

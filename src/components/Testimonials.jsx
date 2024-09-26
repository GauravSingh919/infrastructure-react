import React, { useState } from 'react';

const testimonialsData = {
    Rahul: {
        name: 'Rahul',
        testimonial: 'BLPR provided us with the working capital we needed to invest in new technology.',
        role: 'Tech Entrepreneur',
        photo: '/Client.png'
    },
    Mithlesh: {
        name: 'Mithlesh',
        testimonial: 'Their flexible repayment options were perfect for our cash flow needs.',
        role: 'Small Business Owner',
        photo: '/Client2.png'

    },
    Cheeranjivani: {
        name: 'Cheeranjivani',
        testimonial: 'Exceptional service with fast approval rates.',
        role: 'Freelancer',
        photo: '/Client2.png'

    },
    RJ: {
        name: 'RJ',
        testimonial: 'Thanks to BLPR, our business thrived in a competitive market.',
        role: 'Marketing Manager'
    },
    Cooked: {
        name: 'Cooked',
        testimonial: 'Efficient and professional financial services.',
        role: 'Restaurant Owner'
    }
};

const Testimonials = () => {
    const [selectedClient, setSelectedClient] = useState('Rahul');

    // const handleImageClick = (clientName) => {
    //     setSelectedClient(clientName);
    // };

    const [isFlipped, setIsFlipped] = useState(false);

    const handleImageClick = (clientName) => {
        setIsFlipped(true); // Start flip animation
        setTimeout(() => {
            setSelectedClient(clientName);
            setIsFlipped(false); // Reset flip animation
        }, 500); // Match with the animation duration
    };

    return (
        <div className='container mx-auto py-16 px-5 lg:px-0' id="testimonials">
            <div className='text-left text-black text-[40px] leading-9 font-semibold'>
                Hear from Our Clients
            </div>
            <div className='flex flex-col md:flex-row items-center lg:items-start lg:py-10'>
                <div className='relative h-80 w-96 mx-auto hidden md:block'>
                    <img
                        src='/Client.png'
                        alt='Rahul'
                        className='rounded-full h-20 w-20 object-contain absolute hover:scale-110 cursor-pointer transition-transform'
                        style={{
                            top: '10%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => handleImageClick('Rahul')}
                    />
                    {/* Second Row: 2 images */}
                    <img
                        src='/Client2.png'
                        alt='Mithlesh'
                        className='rounded-full h-20 w-20 object-contain absolute hover:scale-110 cursor-pointer transition-transform'
                        style={{
                            top: '40%',
                            left: '30%',
                            transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => handleImageClick('Mithlesh')}
                    />
                    <img
                        src='/Client2.png'
                        alt='Cheeranjivani'
                        className='rounded-full h-20 w-20 object-contain absolute hover:scale-110 cursor-pointer transition-transform'
                        style={{
                            top: '50%',
                            left: '80%',
                            transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => handleImageClick('Cheeranjivani')}
                    />
                    {/* Third Row: 3 images */}
                    <img
                        src='/Client.png'
                        alt='RJ'
                        className='rounded-full h-20 w-20 object-contain absolute hover:scale-110 cursor-pointer transition-all'
                        style={{
                            top: '80%',
                            left: '10%',
                            transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => handleImageClick('RJ')}
                    />
                    <img
                        src='/Client.png'
                        alt='Cooked'
                        className='rounded-full h-20 w-20 object-contain absolute hover:scale-1 cursor-pointer transition-all'
                        style={{
                            top: '90%',
                            left: '80%',
                            transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => handleImageClick('Cooked')}
                    />
                </div>

                <div className='basis-1/2 pt-10 lg:pt-0'>
                    {selectedClient && (
                        <div
                            className={`rounded-lg p-5 max-w-[445px] dropeffects border-2  shadow-2xl transition-all duration-200 ease-in-out transform ${isFlipped ? 'animate-pulse' : ''
                                }`}
                        >
                            <h1 className='lg:text-[24px] lg:leading-[28.8px] font-semibold text-white'>
                                {testimonialsData[selectedClient].name}'s Testimonial
                            </h1>
                            <p className='min-h-40 h-full pt-5 text-white'>
                                {testimonialsData[selectedClient].testimonial}
                            </p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <img src={testimonialsData[selectedClient].photo} alt='Client' className='h-14 w-14 object-contain' />
                                    <div className='pl-5'>
                                        <p className='text-white'>{testimonialsData[selectedClient].name}</p>
                                        <p className='text-white'>{testimonialsData[selectedClient].role}</p>
                                    </div>
                                </div>
                                <img src='/LinkIcon.png' alt='Arrow UP' className='w-10' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

import React, { useState } from 'react';

const Team = () => {
    const [team, setTeam] = useState([
        {
            memberimg: '/happy.jpg',
            linkedinurl: '',
            instaurl: '',
            fburl: '',
            twitterurl: '',
            membername: 'Bajranglal Nathulal Prajapati',
            memberrole: 'Co-Founder',
            memberdescription: 'Bajranglal boasts over 25 years of experience in Civil & Interior works, specializing in Luxury Residence interiors, QSR, Conference halls, and Training centers for corporates, as well as office interiors and Turnkey Projects.',
        },
        {
            memberimg: '/happy.jpg',
            linkedinurl: '',
            instaurl: '',
            fburl: '',
            twitterurl: '',
            membername: 'Praburam Srinivasan',
            memberrole: 'Co-Founder',
            memberdescription: 'Praburam is a Chartered Civil Engineer, and he brings extensive experience accumulated over 30 years in the construction industry, encompassing roles in Residential, High-Rise & Factory Buildings, Powerhouse Projects, and Retail Outlets.',
        },
    ]);

    return (
        <div className='container mx-auto px-5 md:px-0 py-16'>
            <div className='text-black epilogue-web-bold text-[52px] leading-[74px] text-center'>
                Our Motivated Team
                <p className='text-[#5D6683] text-center text-sm leading-[22px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut tur
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </div>
            <div className='pt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {team.map((item, i) => (
                        <div key={i}>
                            <div className='relative group'>
                                <img src={item.memberimg} alt='Team Image' className='relative lg:h-[350px] w-full object-contain drop-shadow-lg shadow-[#D3D3D3]' />
                                <div className="absolute left-1/2 bottom-0 bg-white z-2 p-1 transform -translate-x-1/2 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className='flex gap-4 items-center'>
                                        <a href={item.linkedinurl}>
                                            <img src="/linkedin.svg" alt="linkedin" className='w-12' />
                                        </a>
                                        <a href={item.instaurl}>
                                            <img src="/insta.svg" alt="insta" className='w-12' />
                                        </a>
                                        <a href={item.fburl}>
                                            <img src="/fb.svg" alt="fb" className='w-12' />
                                        </a>
                                        <a href={item.twitterurl}>
                                            <img src="/twitter.svg" alt="x" className='w-12 ' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <h3 className='epilogue-web-bold text-[19px] leading-[30px] text-black'>{item.membername}</h3>
                                <p className='text-[16px] font-semibold leading-[22px] text-[#12182B]'>{item.memberrole}</p>
                                <p className='text-[16px] font-normal leading-[22px] text-[#5D6683] mt-2'>{item.memberdescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;

import React, { useState } from 'react';

const Blog = () => {
    const [blogs, setBlog] = useState([
        {
            id: 1,
            image: '/blog1.png',
            title: '_Home style / 12-09-2024',
            description: 'Designer Lamp for Added Interior in the Desire Your Houses',
            links: 'Learn More'
        },
        {
            id: 2,
            image: '/blog2.png',
            title: '_Home style / 12-09-2024',
            description: 'Designer Lamp for Added Interior in the Desire Your Houses',
            links: 'Learn More'
        },
    ]);

    return (
        <div className='bg-[#EFEFEF] py-20 drop-shadow-lg'>
            <div className='container mx-auto px-5'>
                <div className='flex justify-between'>
                    <div>
                        <div className='text-[#BCC1CA]'>
                            _Recent Articles
                        </div>
                        <div className='epilogue-web-bold'>Our Latest Blog</div>
                    </div>
                    <div>
                        <button className='bg-[#414141] rounded-[4px] text-white px-8 py-3 font-normal text-[15px] leading-[24px]'>View all</button>
                    </div>
                </div>

                <div className='py-10'>
                    <div className='grid grid-cols-2 gap-5 md:gap-20'>
                        {blogs.map((blog, index) => (
                            <div key={index} className='scale-100 hover:scale-105 transition-all duration-900'>
                                <img src={blog.image} alt='Blogs image' className='rounded w-full object-contain px-2 ' />
                                <div className='bg-white w-full p-5'>
                                    <p className='text-[#BCC1CA] text-[13px] leading-[22px] font-normal'>{blog.title}</p>
                                    <p className='text-black epilogue-web-bold text-base md:text-[20px] md:leading-[33px]'>{blog.description}</p>
                                    <p className='mt-2 text-[#171A1F] text-xs md:text-[15px] md:leading-[24px]'>{blog.links}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

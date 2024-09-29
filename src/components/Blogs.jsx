import React, { useState } from 'react'

const Blogs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    const stories = [
        {
            id: 1,
            blogimg: '/blogs2.png',
            blogtitle: 'ABC Company',
            blogdescription: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
        {
            id: 2,
            blogimg: '/blogs2.png',
            blogtitle: 'XYZ Company',
            blogdescription: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
        {
            id: 3,
            blogimg: '/blogs2.png',
            blogtitle: 'DEF Company',
            blogdescription: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
    ];

    const [expanded, setExpanded] = useState(stories.map(() => false));

    const toggleTexts = (index) => {
        const newExpandedState = [...expanded];
        newExpandedState[index] = !newExpandedState[index];
        setExpanded(newExpandedState);
    };

    return (
        <div className='bg-[#EFEFEF] py-10'>
            <div className='px-5 md:px-0 md:container mx-auto'>
                <div className='lato-bold lg:text-[40px] leading-[68px] tracking-wide'>
                    Blogs & More
                </div>
                <div className='flex pt-5 gap-16'>
                    <div className='basis-1/2'>
                        <div>
                            <img src="/blogs1.png" className='w-full h-auto rounded-lg max-w-[635px] max-h-[345px]' />
                            <div className='title lato-bold lg:text-[32px] leading-[54px] tracking-wide'>
                                Boosting Your Marketing Team
                            </div>
                            <div className="text-gray-700 font-normal lg:text-[18px] lg:leading-[30px] ">
                                <p className="inline">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarks
                                    {!isExpanded && (
                                        <span className="inline">
                                            <span>…</span>
                                            <button
                                                onClick={toggleText}
                                                className="text-black lg:text-[18px] lg:leading-[30px] font-bold hover:underline ml-1"
                                            >
                                                Read More
                                            </button>
                                        </span>
                                    )}
                                    {isExpanded && (
                                        <>
                                            <span className='pl-1'>
                                                right at the coast of the Semantics, a large language ocean.
                                            </span>
                                            <button
                                                onClick={toggleText}
                                                className="text-black font-semibold hover:underline ml-1"
                                            >
                                                Read Less
                                            </button>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        {stories.map((story, index) => (
                            <div key={index}>
                                <div className='flex items-start pb-5'>
                                    <img
                                        src={story.blogimg}
                                        alt={story.blogtitle}
                                        className='max-w-[250px] max-h-[150px] object-cover rounded-lg'
                                    />
                                    <div className='ml-5'>
                                        <div className='lato-bold lg:text-[24px] leading-[30px] tracking-wide'>
                                            {story.blogtitle}
                                        </div>
                                        <p className='text-black lg:text-[18px] lg:leading-[30px] font-normal ml-1'>
                                            {expanded[index]
                                                ? story.blogdescription
                                                : `${story.blogdescription.slice(0, 60)}…`}{/* Show a portion of the text and add ellipsis */}
                                            <button
                                                onClick={() => toggleTexts(index)}
                                                className='text-blue-500 font-semibold hover:underline ml-1'
                                            >
                                                {expanded[index] ? 'Read Less' : 'Read More'}
                                            </button>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center pt-5'>
                    <button className='px-10 py-2 bg-black text-white text-center rounded-full'>
                        View all
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Blogs

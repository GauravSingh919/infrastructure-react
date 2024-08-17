import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarItems = [
        { id: 1, navItems: "Home" },
        { id: 2, navItems: "Services" },
        { id: 3, navItems: "Portfolio" },
        { id: 4, navItems: "About" },
        { id: 5, navItems: "Contact" }
    ];

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='bg-white sticky top-0 left-0 right-0 z-[99]  drop-shadow-xl shadow-black mix-blend-difference backdrop-blur-2xl'>

                <div className='container mx-auto flex items-center justify-between py-5 '>
                    {/* Logo Section */}
                    <div className='flex items-center gap-x-5 px-5'>
                        <img src='' alt='Logo' className='rounded-full h-6 w-6 bg-gray-300' />
                        <p className='font-semibold text-[18px] leading-5 xl:text-[28px] xl:leading-[36px]'>Interior Design</p>
                    </div>

                    {/* Desktop Navbar and Search */}
                    <div className='hidden md:flex gap-x-8 items-center'>
                        <div className='flex gap-x-10 font-normal text-[16px] leading-[24px]'>
                            {navbarItems.map((item) => (
                                <div key={item.id} id={item.id}>
                                    {item.navItems}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Button */}
                    <div className='md:hidden flex items-center'>
                        <button
                            type="button"
                            className="text-gray-900 focus:outline-none pr-5    "
                            onClick={toggleNavbar}
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            {isOpen && (
                <div className="md:hidden">
                    <div className='flex flex-col items-center bg-gray-100 py-2 space-y-2'>
                        {navbarItems.map((item) => (
                            <div key={item.id} id={item.id} className='text-lg'>
                                {item.navItems}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;

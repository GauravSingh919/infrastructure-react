import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
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
            <div className='bg-white sticky top-0 left-0 right-0 z-50'>

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
                        <div className='flex gap-5'>
                            <form className="relative flex flex-1">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <input
                                    id="search-field"
                                    name="search"
                                    type="search"
                                    placeholder="Search..."
                                    className="block h-full w-full border py-1.5 pl-2 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                />
                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 right-3 h-full w-5 text-gray-400"
                                />
                            </form>
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
                        <form className="relative flex w-full justify-center mt-2">
                            <input
                                id="search-field"
                                name="search"
                                type="search"
                                placeholder="Search..."
                                className="block h-full w-4/5 border py-1.5 pl-2 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            />
                            <MagnifyingGlassIcon
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 right-4 h-full w-5 text-gray-400"
                            />
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;

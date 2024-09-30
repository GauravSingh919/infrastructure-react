import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div id='contact' className='container mx-auto px-5 xl:px-0 py-16'>
            <div className='flex flex-col lg:flex-row gap-20'>
                <div className='basis-1/2'>
                    <div className='lato-bold text-[48px] leading-[60px] tracking-wide'>
                        Get in Touch <br /> with Us
                    </div>
                    <p className='text-[#484848] text-[18px] leading-[30.6px] font-normal'>
                        Whether you need support, want to learn more about our services, or are interested in partnering with us, we’re here to help. Don’t hesitate to reach out—we’re just a call, email, or message away.
                    </p>
                    <div className='border-[#484848] border-t border-dashed w-96 my-5' />
                    <p className=' text-[#484848] lato-semibold text-[20px] leading-[24px] tracking-wide '>
                        Any problem about your booking?<br />
                        You can contact us on :
                    </p>
                    <p className='text-[#484848] font-normal text-[20px] leading-[24px] tracking-wide'>
                        +44 (0)20 7686 3445 <br />
                        info@capstonegroup.com
                    </p>


                </div>
                <div className="basis-1/2 ">
                    <div className='lato-bold text-[28px] leading-[36px] tracking-wide'>
                        Contact Form
                    </div>
                    <form onSubmit={handleSubmit} className=" w-full ">
                        <div className='grid md:grid-cols-2 gap-5 mb-4'>
                            <div className="relative pt-5">
                                <label htmlFor="firstName" className="block text-[#484848] font-semibold leading-[21.79px] mb-2">First Name</label>
                                <div className="flex items-center bg-white rounded ">
                                    {/* <UserIcon className="h-5 w-5 text-[#BCC1CA] ml-3" /> */}
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        className="w-full p-3 rounded border-[#484848] border text-[#484848] focus:outline-none titillium-web-semibold placeholder-[#484848]"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="relative lg:pt-5">
                                <label htmlFor="lastName" className="block text-[#484848] font-semibold leading-[21.79px] mb-2">Last Name</label>
                                <div className="flex items-center bg-white rounded ">
                                    {/* <UserIcon className="h-5 w-5 text-[#BCC1CA] ml-3" /> */}
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="w-full p-3 rounded border-[#484848] border text-[#484848] focus:outline-none titillium-web-semibold placeholder-[#484848]"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className="block text-[#484848] font-semibold leading-[21.79px] mb-2">Email</label>
                                <div className="flex items-center bg-white rounded ">
                                    {/* <EnvelopeIcon className="h-5 w-5 text-[#BCC1CA] ml-3" /> */}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="w-full p-3 rounded border-[#484848] border text-[#484848] focus:outline-none titillium-web-semibold placeholder-[#484848]"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="subject" className="block text-[#484848] font-semibold leading-[21.79px] mb-2">Subject</label>
                                <div className="flex items-center bg-white rounded ">
                                    {/* <ArrowTopRightOnSquareIcon className="h-5 w-5 text-[#BCC1CA] ml-3" /> */}
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        className="w-full p-3 rounded border-[#484848] border text-[#484848] focus:outline-none titillium-web-semibold placeholder-[#484848]"
                                        required
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="relative mb-6">
                            <label htmlFor="message" className="block text-[#484848] font-semibold leading-[21.79px] mb-2">Your Message</label>
                            <div className="flex items-center bg-white rounded ">
                                {/* <EnvelopeIcon className="h-5 w-5 text-[#BCC1CA] ml-3 -mt-20" /> */}
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Your Message'
                                    className="w-full p-3 rounded border-[#484848] border text-[#484848] focus:outline-none titillium-web-semibold placeholder-[#484848]"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="w-full py-[10px] titillium-web-semibold  text-[17px] leading-[30.6px] bg-[#171A1F] text-white  rounded hover:bg-[#111317] transition duration-300"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

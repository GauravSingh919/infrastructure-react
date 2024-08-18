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
        <div id='contact' className='container mx-auto px-5 md:px-0 py-16'>
            <div className='text-center titillium-web-semibold text-[58px] leading-[81.2px]'>
                Send A Request To Us
            </div>
            <div className="flex items-center justify-center mt-10">
                <form onSubmit={handleSubmit} className=" w-full ">
                    <div className='grid md:grid-cols-2 gap-5 mb-4'>
                        <div className="relative">
                            <label htmlFor="firstName" className="block text-white sr-only">First Name</label>
                            <div className="flex items-center bg-[#313131] rounded">
                                <UserIcon className="h-5 w-5 text-[#BCC1CA] ml-3" />
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="w-full p-3 rounded bg-transparent text-white focus:outline-none titillium-web-semibold placeholder-[#BBBBBB]"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="lastName" className="block text-white sr-only">Last Name</label>
                            <div className="flex items-center bg-[#313131] rounded">
                                <UserIcon className="h-5 w-5 text-[#BCC1CA] ml-3" />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="w-full p-3 rounded bg-transparent text-white focus:outline-none titillium-web-semibold placeholder-[#BBBBBB]"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="block text-white sr-only">Email</label>
                            <div className="flex items-center bg-[#313131] rounded">
                                <EnvelopeIcon className="h-5 w-5 text-[#BCC1CA] ml-3" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full p-3 rounded bg-transparent text-white focus:outline-none titillium-web-semibold placeholder-[#BCC1CA]"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="subject" className="block text-white sr-only">Subject</label>
                            <div className="flex items-center bg-[#313131] rounded">
                                <ArrowTopRightOnSquareIcon className="h-5 w-5 text-[#BCC1CA] ml-3" />
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="w-full p-3 rounded bg-transparent text-white focus:outline-none titillium-web-semibold placeholder-[#BCC1CA]"
                                    required
                                />
                            </div>
                        </div>
                    </div>


                    <div className="relative mb-6">
                        <label htmlFor="message" className="block text-white sr-only">Your Message</label>
                        <div className="flex items-center bg-[#313131] rounded">
                            <EnvelopeIcon className="h-5 w-5 text-[#BCC1CA] ml-3 -mt-20" />
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Your Message'
                                className="w-full p-3 rounded bg-[#313131] text-white focus:outline-none titillium-web-semibold  placeholder-[#BCC1CA] h-32 resize-none"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-96 py-[10px] titillium-web-semibold  text-[17px] leading-[30.6px] bg-[#171A1F] text-white  rounded hover:bg-[#111317] transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

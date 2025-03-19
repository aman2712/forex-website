import React from 'react';
import { IoIosCall } from "react-icons/io"
import { IoMail, IoLockClosedOutline } from "react-icons/io5";
import { FaLocationDot, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import Button from "../shared/button";

export default function Footer() {
    return (
        <footer
            className='bg-center bg-cover px-36 relative'
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(230, 245, 255, 0.9), rgba(245, 230, 255, 1)), url(/images/hero-bg.jpg)'
            }}
        >
            {/* Decorative money tree image */}
            <img src="/images/money-tree.png" alt="Money Tree Icon" className='w-48 absolute bottom-0 right-30' />

            {/* Contact Information Section */}
            <section className='grid grid-cols-3 py-10 border-b border-gray-300 gap-20'>
                {[{
                    Icon: IoIosCall,
                    title: "Call Us 7/24",
                    detail: "+44 1231231231"
                }, {
                    Icon: IoMail,
                    title: "Make a Quote",
                    detail: "info@forexproguru.com"
                }, {
                    Icon: FaLocationDot,
                    title: "Location",
                    detail: "Technical Support INDIA"
                }].map(({ Icon, title, detail }, index) => (
                    <div key={index} className='flex gap-4 items-center justify-center'>
                        <Icon size={50} className='bg-white p-2 rounded-full text-blue-400' />
                        <div>
                            <p className='text-gray-500'>{title}</p>
                            <p className='mt-1 font-geist text-lg font-semibold'>{detail}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Footer Main Content */}
            <section className='grid grid-cols-4 py-10 gap-10'>
                {/* Brand Information */}
                <div>
                    <img src="/images/logo.png" alt="Company Logo" className='w-56' />
                    <p className='mt-8 text-gray-600 font-semibold'>Lorem ipsum is dummy text ever since lorem printer took of type and scrambled</p>
                    <div className='flex items-center gap-7 mt-5'>
                        {[FaFacebookF, FaLinkedin, FaTwitter, FaInstagram].map((Icon, index) => (
                            <Icon key={index} size={30} className='text-blue-500 cursor-pointer' />
                        ))}
                    </div>
                </div>

                {/* Course Links */}
                <nav className='pl-15'>
                    <h2 className='font-geist font-semibold text-xl'>Our Courses</h2>
                    <ul className='mt-4'>
                        {["Course 1", "Course 2", "Course 3", "Course 4"].map((course, index) => (
                            <li key={index} className='text-gray-500 font-semibold mb-1 hover:text-black transition duration-300'>
                                <a href='#'>{course}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Quick Links */}
                <nav className='pl-5'>
                    <h2 className='font-geist font-semibold text-xl'>Quick Links</h2>
                    <ul className='mt-4'>
                        {["About Us", "Plans & Pricing", "Testimonials", "FAQs", "Contact", "Privacy Policy", "Refund/Cancellation Policy", "Disclosure"].map((link, index) => (
                            <li key={index} className='text-gray-500 font-semibold mb-1 hover:text-black transition duration-300'>
                                <a href='#'>{link}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Authentication Buttons */}
                <div className='justify-self-end'>
                    <Button text="Login" type="primary" icon={<IoLockClosedOutline size={21} />} className="w-36 justify-center mb-6" />
                    <Button text="Register" type="secondary" icon={<CiUser size={21} />} className="w-36 justify-center" />
                </div>
            </section>

            {/* Copyright Section */}
            <section className='border-t border-gray-300 text-center py-5'>
                <p className='text-gray-500'>&copy; 2025 <span className='text-blue-500'>FPG</span>. All Rights Reserved</p>
            </section>
        </footer>
    );
}

import React from "react";
import Button from "../shared/button";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Navbar() {
    return (
        // Navigation bar with transparent background and absolute positioning
        <nav className="bg-transparent flex justify-between items-center py-6 px-20 absolute top-0 w-full z-20 max-w-[90rem]">
            {/* Logo section */}
            <img
                src="/images/logo.png"
                alt="Forex Pro Guru Logo"
                className="w-56"
            />

            {/* Navigation links and buttons */}
            <ul className="flex gap-10 items-center">
                {/* About Us link with hover effect */}
                <li>
                    <a
                        href="#"
                        className="font-semibold text-gray-500 hover:text-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                    >
                        About Us
                    </a>
                </li>

                {/* Our Courses link with hover effect */}
                <li>
                    <a
                        href="#"
                        className="font-semibold text-gray-500 hover:text-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                    >
                        Our Courses
                    </a>
                </li>

                {/* Plans & Pricing link with hover effect */}
                <li>
                    <a
                        href="#"
                        className="font-semibold text-gray-500 hover:text-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                    >
                        Plans & Pricing
                    </a>
                </li>

                {/* FAQs link with hover effect */}
                <li>
                    <a
                        href="#"
                        className="font-semibold text-gray-500 hover:text-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                    >
                        FAQs
                    </a>
                </li>

                {/* Register button */}
                <li>
                    <Button
                        text="Register"
                        type="secondary"
                        icon={<CiUser size={21} />}
                    />
                </li>

                {/* Login button */}
                <li>
                    <Button
                        text="Login"
                        type="primary"
                        icon={<IoLockClosedOutline size={21} />}
                        className="-ml-6"
                    />
                </li>
            </ul>
        </nav>
    );
}
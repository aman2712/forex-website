import React from "react";
import Button from "../shared/button";
import { GoArrowUpRight } from "react-icons/go";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
    return (
        // Main hero section with full-screen height and background image
        <section className="max-h-[50rem] bg-center bg-cover relative">
            {/* Background image layer with reduced opacity */}
            <Parallax speed={-70}>
                <div
                    className="absolute inset-0 bg-center bg-cover -z-2 bg-fixed h-[40rem]"
                    style={{
                        backgroundImage: 'url(/images/hero-bg.jpg)',
                        filter: 'opacity(0.2)'
                    }}
                ></div>
            </Parallax>

            {/* Gradient overlay layer */}
            <div
                className="absolute inset-0 -z-1"
                style={{
                    background: "linear-gradient(120deg, rgba(30, 87, 221, 0.1) 20%, rgba(167, 186, 209, 0.1) 80%)"
                }}
            ></div>

            {/* Main content container */}
            <div className="flex items-center justify-between px-36 h-[50rem] pt-10">
                {/* Left content section */}
                <div className="flex-[0.9]">
                    {/* Welcome message with branded badge */}
                    <p className="text-lg mb-4">
                        👋 Hi We&nbsp;
                        <span className="bg-black text-white py-1 px-2 text-sm rounded-sm">
                            FOREX PRO GURU
                        </span>
                    </p>

                    {/* Main heading */}
                    <h1 className="text-6xl/tight font-bold mb-6 font-geist">
                        Master the Basics of Forex Trading
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl font-semibold mb-8">
                        Learn the essential concepts, strategies and tools to start your journey in the dynamic world of Forex trading.
                    </p>

                    {/* Call-to-action buttons */}
                    <div className="flex items-center gap-10">
                        <Button
                            text="Get Started"
                            type="primary"
                            icon={<GoArrowUpRight />}
                        />
                        <a
                            href="#"
                            className="flex items-center text-blue-600 gap-2 text-lg"
                        >
                            Find Out More
                            <FaCircleArrowRight size={21} />
                        </a>
                    </div>
                </div>

                {/* Right image section */}
                <div className="w-2/4 relative">
                    <img
                        src="/images/hero-image.png"
                        alt="Forex Pro Guru Hero Illustration"
                    />
                    <img
                        src="/images/logo.png"
                        alt="Forex Pro Guru Logo"
                        className="absolute top-10 w-32 left-15"
                    />
                </div>
            </div>
        </section>
    );
}
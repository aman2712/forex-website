import React from "react";
import Button from "../shared/button";
import { GoArrowUpRight } from "react-icons/go";

// Feature data array containing feature information
const featureData = [
    {
        image: '/images/feature-1.png',
        text: 'The ultimate platform for exploring careers'
    },
    {
        image: '/images/feature-2.png',
        text: 'Motivated by analytical reports and a rewarding system'
    },
    {
        image: '/images/feature-3.png',
        text: "Featuring 700+ animated job profiles customized to each learner's level"
    },
    {
        image: '/images/feature-4.png',
        text: "Includes 110+ progressive career paths based on groups"
    }
];

// Component to render individual feature card
const FeatureCard = ({ card, index }) => (
    <div
        key={index}
        className="bg-white rounded-xl flex items-center justify-center flex-col py-8 px-4 border-2 border-blue-200"
    >
        <img
            src={card.image}
            alt={`Feature icon: ${card.text}`}
            className="w-16 h-16"
        />
        <p className="text-center mt-6 font-semibold">{card.text}</p>
    </div>
);

export default function Features() {
    return (
        // Main section with light blue background
        <section className="bg-blue-100 px-36 pb-20">
            {/* Hero box with background image */}
            <div
                className="flex rounded-lg items-center -translate-y-[50%] bg-center bg-cover"
                style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
            >
                {/* Overlay patterns */}
                <div
                    className="absolute inset-0 h-full w-full -z-5 rounded-lg bg-blue-600"
                    style={{ filter: 'opacity(0.5)' }}
                ></div>
                <div className="absolute inset-0 w-full h-full bg-blue-500 -z-1 rounded-lg clip-rectangle"></div>

                {/* Left content section */}
                <div className="flex-[0.6] py-8 px-10 z-10">
                    <h1 className="text-4xl font-geist font-bold text-white">
                        Top Trends for the Future of Work
                    </h1>
                    <p className="mt-4 font-semibold text-white">
                        Extensively researched and carefully crafted by a renowned senior psychologist, counselor, and career coach with over 12 years of experience.
                    </p>
                    <Button
                        type="secondary"
                        text="Let's Start"
                        icon={<GoArrowUpRight />}
                        className='border-white text-white mt-10'
                    />
                </div>

                {/* Right image section */}
                <div className="py-5 px-3 flex-[0.4] z-10">
                    <img
                        src="/images/features-img.jpg"
                        alt="Feature showcase image | Forex Pro Guru"
                        className="w-full rounded-md"
                    />
                </div>
            </div>

            {/* Features section */}
            <h1 className="text-4xl font-bold font-geist text-center -mt-10">
                Why Choose&nbsp;
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                    Forex Pro Guru
                </span>
            </h1>

            {/* Grid of feature cards */}
            <div className="grid grid-cols-4 gap-10 mt-10">
                {featureData.map((card, index) => (
                    <FeatureCard key={index} card={card} index={index} />
                ))}
            </div>
        </section>
    );
}
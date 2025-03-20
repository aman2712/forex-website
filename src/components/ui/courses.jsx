import React from "react";
import Button from "../shared/button";
import { GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};


// Course data array containing course information
const courseData = [
    {
        image: '/images/carousel-1.jpg',
        icon: '/images/icon-1.png',
        header: 'Financial',
        title: 'Financial Engineering and Risk Management',
        tag: 'Professional Certificate'
    },
    {
        image: '/images/carousel-2.png',
        icon: '/images/icon-2.jpg',
        header: 'Analysis',
        title: 'Fundamentals of Financial Analysis',
        tag: 'Professional Certificate'
    },
    {
        image: '/images/carousel-3.png',
        icon: '/images/icon-2.jpg',
        header: 'Analysis',
        title: 'Fundamentals of Financial Analysis',
        tag: 'Professional Certificate'
    },
    {
        image: '/images/carousel-4.png',
        icon: '/images/icon-1.png',
        header: 'Trading',
        title: 'Trading Strategies in Emerging Markets',
        tag: 'Trading Course'
    }
];

// Component to render individual course card in the slider
const CourseCard = ({ card, index }) => (
    <div className="bg-white pt-2 pb-4 px-2 rounded-lg shadow-md slide-card" key={index}>
        <img
            src={card.image}
            alt={`${card.title} course banner`}
            className="w-full h-42 rounded-lg"
        />
        <div className="px-3">
            {/* Course category and icon */}
            <div className="mt-4 flex items-center gap-5">
                <img
                    src={card.icon}
                    alt={`${card.header} category icon`}
                    className="w-10 h-10 border p-1 border-gray-300 rounded-md"
                />
                <p className="font-geist font-semibold text-gray-400">{card.header}</p>
            </div>
            {/* Course title and tag */}
            <h1 className="text-lg font-geist font-semibold mt-4">{card.title}</h1>
            <p className="text-sm mt-6 text-gray-400">{card.tag}</p>
        </div>
    </div>
);

export default function Courses() {
    // Slider configuration settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        focusOnSelect: false,
    };

    return (
        // Main section with gradient background
        <section className="bg-gradient-to-b from-blue-100 to-white px-36 pt-20 pb-60">
            {/* Header section with title and view all button */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold font-geist">
                        Comprehensive Forex Learning&nbsp;
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                            Courses
                        </span>
                    </h1>
                    <p className="text-gray-500 mt-2 font-semibold">
                        Our courses are designed to equip with skills needed to succeed in forex trading
                    </p>
                </div>
                <Button
                    type="primary"
                    text="View All"
                    icon={<GoArrowUpRight />}
                />
            </div>

            {/* Slider containing course cards */}
            <Slider {...sliderSettings} className="mt-10">
                {courseData.map((card, index) => (
                    <CourseCard key={index} card={card} index={index} />
                ))}
            </Slider>

            {/* Fundamentals section with enrollment information */}
            <motion.div
                className="mt-30 flex items-center border-t border-gray-300 pt-20 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariants}
            >
                {/* Book icon */}
                <motion.img
                    src="/images/book.png"
                    alt="Icon Book | FPG"
                    className="absolute top-10 left-0 w-20 -rotate-12"
                    variants={staggerVariants}
                    custom={0}
                />

                {/* Left column with title */}
                <motion.div className="flex-[0.4] pr-10" variants={staggerVariants} custom={1}>
                    <h1 className="text-5xl/normal font-bold font-geist text-right">
                        Enroll <br />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                            The Fundamentals
                        </span>
                        <br />of Forex
                    </h1>
                </motion.div>

                {/* Vertical divider */}
                <motion.div
                    className="w-2 h-72 rounded-md bg-gradient-to-b from-blue-600 to-blue-400"
                    variants={staggerVariants}
                    custom={2}
                ></motion.div>

                {/* Right column with course details */}
                <motion.div className="flex-[0.6] pl-10" variants={staggerVariants} custom={3}>
                    <h1 className="text-3xl font-semibold font-geist mb-4">
                        Know about Forex Pro Guru
                    </h1>
                    <p className="mb-4 text-lg text-gray-500">
                        Our fundamentals of Forex course is designed to provide beginners with a strong foundation in Forex trading. With the focus on practical knowledge and learning.
                    </p>
                    <ul id="course-details">
                        <motion.li variants={staggerVariants} custom={4}>Learn essential Forex concepts and strategies step by step.</motion.li>
                        <motion.li variants={staggerVariants} custom={5}>Gain insights from traders with real-world expertise.</motion.li>
                        <motion.li variants={staggerVariants} custom={6}>Apply your knowledge through simulations and case studies.</motion.li>
                        <motion.li variants={staggerVariants} custom={7}>Access resources anytime, anywhere to fit your schedule.</motion.li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
import React from "react";
import Button from "../shared/button";
import { GoArrowUpRight } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Client data array containing testimonial information
const clientData = [
    {
        image: '/images/clients-1.png',
        rating: '4.8',
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
        name: 'Jorge Martinez',
        username: 'nefarious_jellybeans_91'
    },
    {
        image: '/images/clients-2.png',
        rating: '3.2',
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
        name: 'Fatima Mohamed',
        username: 'salubrious_artist_72'
    },
    {
        image: '/images/clients-3.png',
        rating: '3.2',
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
        name: 'Martin Kazlaukas',
        username: 'sartorial_statue_59'
    },
    {
        image: '/images/clients-4.png',
        rating: '3.2',
        text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
        name: 'Larry King',
        username: 'pendulous_unicorn_46'
    },
];

// Component to render individual client testimonial card
const ClientCard = ({ card, index }) => (
    <div className="clients-card-container">
        <div className="bg-white pl-14 pr-10 pt-14 pb-10 clients-card" key={index}>
            {/* Client image and rating section */}
            <div className="flex justify-between">
                <img
                    src={card.image}
                    alt={`${card.name}'s profile`}
                    className="h-16 w-32 object-contain"
                />
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{card.rating}</p>
                    <TiStarFullOutline className="text-green-600" size={21} />
                </div>
            </div>

            {/* Testimonial text */}
            <p className="mt-6 font-geist text-lg text-gray-500">"{card.text}"</p>

            {/* Client information */}
            <h1 className="mt-8 text-2xl font-geist font-semibold">{card.name}</h1>
            <p className="text-sm text-gray-400">{card.username}</p>
        </div>
    </div>
);

export default function Clients() {
    // Slider configuration settings
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        focusOnSelect: false,
    };

    return (
        // Main section with background gradient and image
        <section
            className="pt-20 pb-20 bg-cover bg-center relative"
            style={{
                backgroundImage: 'linear-gradient(90deg, rgba(230, 245, 255, 0.9), rgba(245, 230, 255, 1)), url(/images/clients-bg.png)'
            }}
        >
            {/* Header section with title and view all button */}
            <div className="flex justify-between items-center px-36">
                <div>
                    <h1 className="text-4xl font-bold font-geist">
                        What Our&nbsp;
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                            Clients Says
                        </span>
                    </h1>
                    <p className="text-gray-500 mt-2 font-semibold">
                        There are many variations of passages of lorem ipsum available but the majority have suffered.
                    </p>
                </div>
                <Button
                    type="primary"
                    text="View All Reviews"
                    icon={<GoArrowUpRight />}
                />
            </div>

            {/* Slider component containing client testimonials */}
            <Slider {...sliderSettings} className="mt-20">
                {clientData.map((card, index) => (
                    <ClientCard key={index} card={card} index={index} />
                ))}
            </Slider>
        </section>
    );
}
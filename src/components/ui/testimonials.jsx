import React from "react";
import { Parallax } from "react-scroll-parallax";

// Component to render individual testimonial image
const TestimonialImage = ({ src, alt, index }) => (
    <figure className="flex-shrink-0 mx-4">
        <img src={src} alt={alt} className="w-32 h-auto object-contain" />
    </figure>
);

export default function Testimonials() {
    const testimonialImages = [
        { src: "/images/company-1.png", alt: "Testimonial 1 | Forex Pro Guru" },
        { src: "/images/company-2.png", alt: "Testimonial 2 | Forex Pro Guru" },
        { src: "/images/company-3.jpg", alt: "Testimonial 3 | Forex Pro Guru" },
        { src: "/images/company-4.jpg", alt: "Testimonial 4 | Forex Pro Guru" },
        { src: "/images/company-5.png", alt: "Testimonial 5 | Forex Pro Guru" },
    ];

    // Duplicate images for seamless looping
    const duplicatedImages = [...testimonialImages, ...testimonialImages];

    return (
        <section className="bg-white overflow-hidden z-100 relative py-8">
            <Parallax
                 translateX={[20, -20]}
                 className="flex gap-20 items-center"
            >
                {duplicatedImages.map((image, index) => (
                    <TestimonialImage
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        index={index}
                    />
                ))}
            </Parallax>
        </section>
    );
}
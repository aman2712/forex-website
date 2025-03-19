import React from "react";

// Component to render individual testimonial image
const TestimonialImage = ({ src, alt, index }) => (
    <figure>
        <img src={src} alt={alt} key={index} />
    </figure>
);

export default function Testimonials() {
    // Array of testimonial image data
    const testimonialImages = [
        { src: "/images/company-1.png", alt: "Testimonial 1 | Forex Pro Guru" },
        { src: "/images/company-2.png", alt: "Testimonial 2 | Forex Pro Guru" },
        { src: "/images/company-3.jpg", alt: "Testimonial 3 | Forex Pro Guru" },
        { src: "/images/company-4.jpg", alt: "Testimonial 4 | Forex Pro Guru" },
        { src: "/images/company-5.png", alt: "Testimonial 5 | Forex Pro Guru" },
        { src: "/images/company-1.png", alt: "Testimonial 1 | Forex Pro Guru" },
    ];

    return (
        // Main section for testimonials with grid layout
        <section className="bg-white grid grid-cols-6 items-center gap-25 px-20 -mt-20">
            {testimonialImages.map((image, index) => (
                <TestimonialImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    index={index}
                />
            ))}
        </section>
    );
}
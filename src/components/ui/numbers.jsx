import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Component to render individual statistic item
const StatItem = ({ number, label, hasBorder, controls, inView }) => {
    const [displayNumber, setDisplayNumber] = React.useState(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = number;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // ~60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setDisplayNumber(Math.floor(start));
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, number]);

    return (
        <article className={`flex flex-col items-center w-72 ${hasBorder ? 'border-r border-gray-400' : ''}`}>
            <motion.h2
                className="text-4xl font-bold font-geist text-blue-500 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {displayNumber.toLocaleString()}+
            </motion.h2>
            <p className="text-gray-500">{label}</p>
        </article>
    );
};

export default function Numbers() {
    const stats = [
        { number: 82000, label: 'Enrolled Students', hasBorder: true },
        { number: 348, label: 'Programs', hasBorder: true },
        { number: 125, label: 'Winning Awards', hasBorder: true },
        { number: 38, label: 'Certified Students', hasBorder: false },
    ];

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <section ref={ref} className="flex flex-col justify-center items-center py-10">
            <header>
                <h1 className="text-center font-bold font-geist text-3xl mb-10">
                    Our Journey of Success
                </h1>
            </header>

            <div className="grid grid-cols-4" role="list">
                {stats.map((stat, index) => (
                    <StatItem
                        key={index}
                        number={stat.number}
                        label={stat.label}
                        hasBorder={stat.hasBorder}
                        controls={controls}
                        inView={inView}
                    />
                ))}
            </div>
        </section>
    );
}
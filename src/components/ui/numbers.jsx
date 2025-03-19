import React from 'react';

// Component to render individual statistic item
const StatItem = ({ number, label, hasBorder }) => (
    <article className={`flex flex-col items-center px-20 ${hasBorder ? 'border-r border-gray-400' : ''}`}>
        <h2 className="text-4xl font-bold font-geist text-blue-500 mb-2">{number}</h2>
        <p className="text-gray-500">{label}</p>
    </article>
);

export default function Numbers() {
    // Array of statistics data
    const stats = [
        { number: '82K+', label: 'Enrolled Students', hasBorder: true },
        { number: '348+', label: 'Programs', hasBorder: true },
        { number: '125+', label: 'Winning Award', hasBorder: true },
        { number: '38+', label: 'Certified Students', hasBorder: false },
    ];

    return (
        // statistics section
        <section className="flex flex-col justify-center items-center py-10">
            {/* Semantic header for the section title */}
            <header>
                <h1 className="text-center font-bold font-geist text-3xl mb-10">
                    Our Journey of Success
                </h1>
            </header>

            {/* The statistics grid */}
            <div className="grid grid-cols-4" role="list">
                {stats.map((stat, index) => (
                    <StatItem
                        key={index}
                        number={stat.number}
                        label={stat.label}
                        hasBorder={stat.hasBorder}
                    />
                ))}
            </div>
        </section>
    );
}
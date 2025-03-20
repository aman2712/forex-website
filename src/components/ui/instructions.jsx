import React from 'react';
import { LuClipboardCheck } from "react-icons/lu";
import { GiChoice } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import Button from '../shared/button';
import { GoArrowUpRight } from 'react-icons/go';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Instruction data array containing step information
const instructionData = [
    {
        icon: <LuClipboardCheck size={45} className='text-blue-400' />,
        title: 'Register',
        text: 'Subscribe to an annual plan via secure payment.',
        background: 'bg-blue-200'
    },
    {
        icon: <GiChoice size={45} className='text-blue-400' />,
        title: 'Appropriate',
        text: 'Select your age/grade and language preference.',
        background: 'bg-teal-200'
    },
    {
        icon: <FaUser size={45} className='text-blue-400' />,
        title: 'Login',
        text: 'Log in using your username and password.',
        background: 'bg-orange-200'
    },
    {
        icon: <MdFeaturedPlayList size={45} className='text-blue-400' />,
        title: 'Features',
        text: 'Discover and enjoy our 6 key features.',
        background: 'bg-yellow-200'
    }
];

// Component to render individual instruction card
const InstructionCard = ({ card, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.2,    // Trigger when 20% of the card is visible
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2, // Stagger effect
            },
        },
    };

    return (
        <motion.article
            ref={ref}
            className={`${card.background} flex flex-col items-center px-5 py-10 rounded-lg relative`}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
        >
            <span className='absolute top-5 left-5 font-geist font-semibold'>0{index + 1}.</span>
            <figure>{card.icon}</figure>
            <h2 className='text-2xl font-bold font-geist mt-5'>{card.title}</h2>
            <p className='font-geist mt-4 text-center text-gray-700'>{card.text}</p>
        </motion.article>
    );
};

export default function Instructions() {
    return (
        <section className='flex flex-col justify-center items-center py-10 pt-15 px-36 relative'>
            <img src="/images/coin.png" alt="Coin vector | FPG" className='w-32 absolute top-5 right-30 animate-bounce' />
            <header>
                <h1 className='text-center font-bold font-geist text-4xl mb-10'>
                    Instructions to&nbsp;
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                        Follow
                    </span>
                </h1>
            </header>

            {/* Grid of instruction cards with animation */}
            <motion.div 
                className='grid grid-cols-4 mt-10 w-full gap-10'
                role="list"
                initial="hidden"
                animate="visible"
            >
                {instructionData.map((card, index) => (
                    <InstructionCard key={index} card={card} index={index} />
                ))}
            </motion.div>

            <aside className="flex rounded-lg items-center bg-center bg-cover relative mt-20">
                <div className="absolute inset-0 h-full w-full -z-5 rounded-lg bg-blue-600"></div>
                <div className="absolute inset-0 w-full h-full bg-blue-500 -z-1 rounded-lg clip-rectangle-instructions"></div>
                <div className="flex-[0.8] py-8 px-10 z-10">
                    <h2 className="text-4xl font-geist font-bold text-white">
                        But Before Registering...
                    </h2>
                    <p className="mt-4 font-semibold text-white">
                        Discover what you like and what you are good at. Each set of questions help you unlock new discoveries and gives insight into what makes you so unique and special
                    </p>
                </div>
                <div className="flex-[0.2] flex items-center justify-center z-10">
                    <Button
                        type="secondary"
                        text="Let's Start"
                        icon={<GoArrowUpRight />}
                        className='border-white text-white'
                    />
                </div>
            </aside>
        </section>
    );
}
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['100', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    // Format current time without AM or PM
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Animation variants
    const textVariants = {
        hidden: {
            opacity: 0,
            y: -27
        },
        visible: {
            y: 0,
            opacity: 1,
        },
        transition: { ease: "easeOut", duration: 7 }

    };


    return (
        <div className='h-screen w-screen flex justify-center items-center bg-black'>

            <div className='flex  justify-center items-center w-screen text-center'>
                <motion.h1
                    className={`${poppins.className} text-[320px] font-light text-white w-[200px] text-center `}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    key={hours}
                >
                    {hours}
                </motion.h1>
                <motion.h1
                    className={`${poppins.className} text-[320px] font-light text-white  w-[400px] text-center ml-20`}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    key={minutes}
                >
                    {minutes}
                </motion.h1>
                <motion.h1
                    className={`${poppins.className} text-[320px] font-light text-white  w-[400px] text-center`}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    key={seconds}
                >
                    {seconds}
                </motion.h1>
            </div>

        </div>
    );
}

export default Time;

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Poppins } from 'next/font/google';
import Image from "next/image"

const poppins = Poppins({
    weight: ['100', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

function Minimal() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); 
    
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const textVariants = {
        hidden: {
            opacity: 0,
            y: -27
        },
        visible: {
            y: 0,
            opacity: 1,
        },
        transition: { ease: "easeOut", duration: 7, delay: 1 }
    };


    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center bg-black'>
            <div className='flex  justify-center items-center w-screen text-center '>
                <motion.h1
                    className={`${poppins.className} text-[320px] font-light text-white w-[400px] text-center  `}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    key={hours}
                >
                    {hours}
                </motion.h1>

                <motion.h1
                    className={`${poppins.className} text-[320px] font-light text-white  w-[400px] text-center  `}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    key={minutes}
                >
                    {minutes}
                </motion.h1>
                <motion.h1
                    className={`${poppins.className} text-[320px] font-light text-white  w-[400px] text-center `}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    key={seconds}
                >
                    {seconds}
                </motion.h1>
            </div>

            <div className='p-2 bg-gray-800 rounded-full hover:bg-gray-400  transition ease-in-out duration-300 cursor-pointer bottom-10 fixed'>
                <Image
                    src="/up.png"
                    width={20000}
                    height={20000}
                    quality={100}
                    className="w-5 h-5 object-contain"
                />
            </div>

        </div>
    );
}

export default Minimal;

"use client"

import React, { useEffect, useState, useContext } from 'react'
import Image from "next/image"
import { Inter, Manrope, Raleway, DM_Sans, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import useSound from 'use-sound';
import { motion } from "framer-motion"
import ThemeProvider from './ThemeProvider';
import { ThemeContext } from '../contexts/ThemeContext'


const raleway = Raleway({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});
const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});
const dmsans = DM_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});
const cormo = Cormorant_Garamond({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});
const playfair = Playfair_Display({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});
function Homepage() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(25);
    const [tabActive, setTabActive] = useState("Anime")
    const [isActive, setIsActive] = useState(false);
    // const [play] = useSound('/alarm.mp3', { duration: 1 });
    const [play, { stop }] = useSound('/alarm.mp3', { volume: 0.5 });

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0 && minutes === 0) {
                    play();
                    setIsActive(false);
                } else if (seconds === 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else if (!isActive && (seconds !== 0 || minutes !== 0)) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds, minutes]);

    // const [wallpaper, setWallpaper] = useState('/bg4.jpg'); // Set default wallpaper here
    const { wallpaper, setWallpaper, handleModal, setHandleModal } = useContext(ThemeContext)

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const storedWallpaper = localStorage.getItem("wallpaper");
    //         setWallpaper(storedWallpaper !== "" ? storedWallpaper : '/bg4.jpg');
    //     }
    // }, []);


    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
        stop(); // Stop the alarm sound
    };
    const resetTimer = () => {
        setSeconds(0);
        setMinutes(25);
        setIsActive(false);
    };

    return (



        <>

            <Image
                src={wallpaper}
                width={20000}
                height={20000}
                quality={100}
                className="w-screen h-screen object-cover absolute z-10"
            />

            <div className="w-screen h-screen opacity-10 bg-gray-600  absolute z-20" />

            {
                handleModal && (
                    <div className="relative z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <motion.div
                            className="fixed inset-0 bg-gray-900 bg-opacity-75"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>

                        <motion.div
                            className="fixed inset-0 z-10 w-screen overflow-y-auto"
                            initial={{ opacity: 0, translateY: 4, scale: 0.95 }}
                            animate={{ opacity: 1, translateY: 0, scale: 1 }}
                            exit={{ opacity: 0, translateY: 4, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={`${manrope.className} flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 text-black`}>
                                <motion.div
                                    // className=" transform  rounded-lg bg-[#F3F0E7] h-[700px] w-[1200px] p-5 text-left shadow-xl transition-all overflow-y-scroll overflow-x-hidden"
                                    className=" transform  rounded-lg bg-black  opacity-80 backdrop-blur-sm h-[700px] w-[1200px] p-5 text-left shadow-xl transition-all overflow-y-scroll overflow-x-hidden"
                                >

                                    <div class="flex justify-center items-center w-10 h-10  bg-white rounded-full cursor-pointer ">

                                        <Image
                                            src="/close.png"
                                            width={20000}
                                            height={20000}
                                            quality={100}
                                            className="w-4 h-4 object-contain"
                                            onClick={() => setHandleModal(false)}
                                        />
                                    </div>

                                    <div className="flex justify-center items-center mt-10 ">

                                        {/* Left side  */}

                                        <div className="w-1/6 flex flex-col space-y-10">

                                            <div class="flex justify-center items-center space-x-3 font-bold cursor-pointer bg-gray-900 text-white px-4 py-4 ">
                                                <Image
                                                    src="/theme.png"
                                                    width={20000}
                                                    height={20000}
                                                    quality={100}
                                                    className="w-6 h-6 object-contain cursor-pointer"
                                                // onClick={() => setHandleModal(false)}
                                                />
                                                <h1>Themes</h1>
                                            </div>

                                        </div>
                                        <div class="bg-gray-900 w-[2px] h-[500px] " />
                                        {/* Right side */}
                                        <div className="w-5/6 flex flex-col ml-10  text-white">
                                            <div class="flex flex-col space-y-5">

                                                <div class="flex justify-between items-center">
                                                    <h1 class="text-3xl font-bold ">Pick a Theme</h1>

                                                    <div class="flex space-x-3 justify-between items-center cursor-pointer border-gray-500  border  transition ease-in-out duration-300 rounded-full p-3">
                                                        <Image
                                                            src="/upload.png"
                                                            width={20000}
                                                            height={20000}
                                                            quality={100}
                                                            className="w-6 h-6 object-contain cursor-pointer"
                                                        // onClick={() => setHandleModal(false)}
                                                        />
                                                        <h1 class="text-xl font-bold ">Upload your theme</h1>

                                                    </div>
                                                </div>
                                                <h1 class="text-lg font-medium ">Choose a theme that suits your style and enhances your focus. Your environment plays a crucial role in your productivity, and we're here to help you tailor it to your preferences.</h1>
                                            </div>


                                            <div class="font-bold flex justify-evenly items-center space-x-4 text-center my-10 bg-gray-200 rounded-full py-3 text-black ">
                                                <h1
                                                    onClick={() => setTabActive('Aesthetic')}
                                                    class={` ${tabActive == "Aesthetic" && 'bg-yellow-400 text-black hover:bg-yellow-400'} w-[140px] py-4 rounded-full cursor-pointer transition ease-in-out duration-300`}>Aesthetic</h1>
                                                <h1
                                                    onClick={() => setTabActive('Dark')}
                                                    class={` ${tabActive == "Dark" && 'bg-yellow-400 text-black hover:bg-yellow-400'} w-[140px] py-4 rounded-full cursor-pointer transition ease-in-out duration-300`}>Dark</h1>
                                                <h1
                                                    onClick={() => setTabActive('Gradient')}
                                                    class={` ${tabActive == "Gradient" && 'bg-yellow-400 text-black hover:bg-yellow-400'} w-[140px] py-4 rounded-full cursor-pointer transition ease-in-out hover:bg-gray-200 hover:text-black duration-300`}>Gradient</h1>
                                                <h1
                                                    onClick={() => setTabActive('Marvel')}
                                                    class={` ${tabActive == "Marvel" && 'bg-yellow-400 text-black hover:bg-yellow-400'} w-[140px] py-4 rounded-full cursor-pointer transition ease-in-out hover:bg-gray-200 hover:text-black duration-300`}>Marvel</h1>
                                                <h1
                                                    onClick={() => setTabActive('Anime')}
                                                    class={` ${tabActive == "Anime" && 'bg-yellow-400 text-black hover:bg-yellow-400'} w-[140px] py-4 rounded-full cursor-pointer transition ease-in-out hover:bg-gray-200 hover:text-black duration-300`}>Anime</h1>
                                                <h1
                                                    onClick={() => setTabActive('BTS')}
                                                    class={` ${tabActive == "BTS" && 'bg-yellow-400 text-black hover:bg-yellow-400'} w-[140px] py-4 rounded-full cursor-pointer transition ease-in-out hover:bg-gray-200 hover:text-black duration-300`}>BTS</h1>
                                            </div>
                                            {tabActive !== "" && (
                                                <ThemeProvider choice={tabActive} />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )
            }

            <h1 className={`${playfair.className} text-4xl font-normal tracking-wide absolute z-30 w-screen p-10`}>Let Me Focus</h1>


            <div className="w-screen h-screen flex flex-col justify-center items-center absolute z-30 ">
                <div class="flex justify-center items-center space-x-5 ">

                    <div class="flex justify-center items-center border-4 border-white bg-transparent md:px-5 px-2 py-2 rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300  hover:bg-red-600 hover:border-red-600">
                        <h1 className={`${manrope.className} md:text-xl text-sm font-bold `}>Pomodoro</h1>
                    </div>
                    <div class="flex justify-center items-center border-4 border-white bg-transparent md:px-5 px-2 py-2 rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 hover:bg-red-600 hover:border-red-600">
                        <h1 className={`${manrope.className} md:text-xl text-sm font-bold `}>Short Break</h1>
                    </div>
                    <div class="flex justify-center items-center border-4 border-white bg-transparent md:px-5 px-2 py-2 rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 hover:bg-red-600 hover:border-red-600">
                        <h1 className={`${manrope.className} md:text-xl text-sm font-bold `}>Long Break</h1>
                    </div>
                </div>

                <div className=" text-white  rounded-2xl ">
                    {/* <h1 className={`${manrope.className} text-6xl font-bold`}>Let Me Focus</h1> */}

                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex justify-center items-center">

                            <h1 className={`${dmsans.className} text-[160px] font-bold`}>{minutes}</h1>
                            <h1 className={`${dmsans.className} text-[160px] font-bold`}>:</h1>
                            {seconds === 0 ? (
                                <h1 className={`${dmsans.className} text-[160px] font-bold`}>00</h1>
                            )
                                :
                                (
                                    <h1 className={`${dmsans.className} text-[160px] font-bold`}>{seconds}</h1>
                                )

                            }
                        </div>

                        <div className="flex space-x-4 ">

                            <div
                                onClick={startTimer}
                                class={`${dmsans.className} relative rounded px-10 py-3 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300`}>
                                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span class="relative text-2xl font-bold hover:cursor-pointer">Start</span>
                            </div>
                            <div
                                onClick={stopTimer}
                                class={`${dmsans.className} relative rounded px-10 py-3 overflow-hidden group bg-red-500  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300`}>
                                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span class="relative text-2xl font-bold hover:cursor-pointer">Stop</span>
                            </div>
                            <div
                                onClick={resetTimer}
                                class={`${dmsans.className} relative rounded px-10 py-3 overflow-hidden group bg-gray-500  hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300`}>
                                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span class="relative text-2xl font-bold hover:cursor-pointer">Reset</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div
                    onClick={() => setHandleModal(true)}
                    className="absolute h-[screen] p-4 right-10 bottom-6 bg-gray-800 rounded-2xl cursor-pointer transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300  hover:bg-gray-900 ">
                    <Image
                        // src="/bg1.png"
                        src="/settings.png"
                        width={20000}
                        height={20000}
                        quality={100}
                        className="w-8 h-8 object-contain"
                    />
                    {/* <h1 className={`${manrope.className} text-2xl font-bold`}>Change the background</h1> */}
                </div>


            </div>





        </>

    )
}

export default Homepage
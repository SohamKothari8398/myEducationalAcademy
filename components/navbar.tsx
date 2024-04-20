"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../public/Logo.webp";
import { FaSignInAlt } from "react-icons/fa";
import { ImUserPlus } from "react-icons/im";

export const LandingPageNavbar = () => {
    const [descriptionText, setDescriptionText] = useState("VIDYA EDUCATIONAL ACADEMY is Commited to excellence in education. Your description text goes here. This is a long text for demonstration purposes.");
    const scrollDown = () => {
        window.location.href = "/sign-in";
    };
    const scrollDown2 = () => {
        window.location.href = "/sign-up";
    };
    const clickAboutUs = () => {
        window.location.href = "/about-us";
    }
    const clickContactUs = () => {
        window.location.href = "/contact-us";
    }
    return (
        <div className=" w-full h-auto items-center sticky justify-between bg-sky-950 text-white">
            <div className="flex flex-col w-full sticky top-0 items-center font-bold shadow-md justify-between h-auto">
                <div className="flex flex-col justify-between lg:pb-2 w-full h-auto items-center">
                    <div className="flex flex-col lg:flex-row items-center mb-4 lg:mb-0 justify-around w-[100vw] italic h-auto lg:ml-4 cursor-pointer">
                        <div className='flex items-center justify-start'>
                            <Image src={logo} alt="Logo" className="object-contain w-[7rem] sm:w-[9rem] md:w-[10rem] lg:w-[9rem] h-auto hover:scale-125 rounded-lg" />
                            <a href="/" className='text-start'>
                                <div className=" text-sm xs:text-xl sm:text-xl md:text-2xl lg:text-3xl font-sans">VIDYA EDUCATIONAL ACADEMY</div>
                                <div className="text-2xs xs:text-sm font-medium md:text-sm">Commited to excellence in education</div>
                            </a>
                        </div>
                        <div className='grid grid-cols-5 mx-auto justify-center items-center w-full px-4 gap-0 2xs:gap-2 lg:w-1/2 text-2xs 2xs:text-xs sm:text-sm md:text-lg'>
                            <div onClick={scrollDown} className=" ml-4 xs:ml-8 lg:ml-0 cursor-pointer hover:text-sky-400">Home</div>
                            <div onClick={clickAboutUs} className=" ml-2 xs:ml-4 lg:ml-0 cursor-pointer hover:text-sky-400 ">About</div>
                            <div onClick={clickContactUs} className=" cursor-pointer hover:text-sky-400">Contact</div>
                            <div onClick={scrollDown2} className=' flex items-center w-auto cursor-pointer hover:text-sky-400'>
                                <ImUserPlus className=' mr-1 sm:mr-2' /> Register</div>
                            <div onClick={scrollDown} className=' flex ml-2 xs:ml-0 items-center w-auto cursor-pointer hover:text-sky-400'>
                                Login <FaSignInAlt className=' ml-1 sm:ml-2' /></div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center w-full items-center px-4 gap-2 text-2xs sm:text-xs lg:text-base'>
                        <div className='flex 3xs:hidden sm:flex flex-row w-full text-center align-items-end justify-end gap-4'>
                            {/* <a href="/sign-in">
                                <div className='bg-white w-auto cursor-pointer text-sky-950 rounded-lg p-1 md:px-8 border-4 border-white hover:text-green-700 shadow-lg shadow-white'>Login</div>
                            </a>
                            <a href="/sign-up">
                                <div className='bg-white w-auto cursor-pointer text-sky-950 rounded-lg p-1 md:px-8 border-4 border-white hover:text-green-700 shadow-lg shadow-white'>Register</div>
                            </a> */}
                        </div>
                        <div className=" overflow-hidden shadow-lg border-b-4 shadow-white animate-shadow-box-change hover:scale-110 flex items-center  w-[90vw] mb-4 bg-white rounded-full">
                            <div className='bg-orange-300 font-extrabold w-fit z-10 md:px-4 p-2 text-black rounded-l-full'>Announcements </div>
                            <div className="whitespace-nowrap animate-marquee">{descriptionText}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

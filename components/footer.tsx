"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../public/Logo.webp";
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaLinkedin, FaTelegram, FaYoutube, FaInstagram, FaGoogle, FaGooglePay } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    const [descriptionText, setDescriptionText] = useState("Commited to excellence in education");
    const [footerData, setFooterData] = useState({
        twitter: "https://twitter.com/NashikVidya",
        instagram: "https://www.instagram.com/vidyaeducationalacademy",
        youtube: "https://www.youtube.com/@vidyaeducationalacademynas4475/featured",
        google: "https://maps.app.goo.gl/Nd8xnm5jLuXHTzB79",
        facebook: "https://www.facebook.com/vidyaeducationacademy/",
        linkedIn: "https://www.linkedin.com/in/vidya-educational-academy-51635b20a",
        phone: "tel:+917385243661",
        mail: "mailto:contact@xsavlab.com",
        address: "",
    })
    return (
        <footer className=" text-2xs 2xs:text-xs md:text-sm text-white flex flex-col overflow-y-auto h-auto w-full">
            {/* 1st Section */}
            <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center mb-4 md:mb-0">
                <div className="flex justify-center items-center">
                    <div className="font-bold text-xl">
                        <Image src={logo} alt="Logo" className="object-contain w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[10rem] h-auto hover:scale-125 rounded-lg" />
                    </div>
                    <div className='flex flex-col italic hover:scale-105'>
                        <div className="text-base font-bold xs:text-xl sm:text-xl lg:text-2xl text-start">VIDYA EDUCATIONAL ECADEMY</div>
                        <div className="text-2xs">{descriptionText}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 my-auto items-center justify-center">
                    <a href={footerData.phone} target="_blank" rel="noopener noreferrer" className="flex">
                        <FaPhone className="mr-2" />
                        <p>07385243661</p>
                    </a>
                    <a href={footerData.mail} target="_blank" rel="noopener noreferrer" className="flex">
                        <FaEnvelope className="mr-2" />
                        <p>vidyaea@gmail.com</p>
                    </a>
                    <a href={footerData.google} target="_blank" rel="noopener noreferrer" className="flex">
                        <FaMapMarker className="mr-2" />
                        <p>Nashik, Maharashtra</p>
                    </a>
                </div>
                <div className='w-auto flex mx-auto h-auto py-8 '>
                    <div className='w-auto h-auto mx-auto shadow-md shadow-white rounded-lg hover:scale-125'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.6090769270354!2d73.77292503486582!3d20.001611379431598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95f2b788f165%3A0x6c9108cc4d971322!2sVidya%20Educational%20Academy%20-%20NEET%7C%20JEE%7C%20NDA%7C%20Foundation%20Course%7C%20Hostel%20Facility%7C%20CBSE%7C%20SSC%20%7C%20Best%20coaching%20classes%20in%20Nashik!5e0!3m2!1sen!2sin!4v1706968837263!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowFullScreen={true}>
                        </iframe>
                    </div>
                </div>
            </div>


            {/* 2nd Section */}
            {/* <div className="grid grid-cols-3 items-center text-center gap-8 px-16 border-t-2">
                <div className='flex flex-col items-center '>
                    <div className='underline underline-offset-4 my-2'>General</div>
                    <a href="/about" className="text-white mb-2">About Us</a>
                    <a href="/contact" className="text-white mb-2">Contact Us</a>
                    <a href="/admissions" className="text-white mb-2">Admission</a>
                    <a href="#" className="text-white mb-2">Awards</a>
                </div>

                <div className='flex flex-col items-center '>
                    <div className='underline underline-offset-4 my-2'>Fields</div>
                    <a href="/neet-course" className="text-white mb-2">Medical</a>
                    <a href="/jee-course" className="text-white mb-2">Engineering</a>
                    <a href="/defence-course" className="text-white mb-2">Defence</a>
                    <a href="#" className="text-white mb-2">Foundation</a>
                </div>
                <div className='flex flex-col items-center '>
                    <div className='underline underline-offset-4 my-2'>Policies</div>
                    <a href="#" className="text-white mb-2">Others</a>
                    <a href="#" className="text-white mb-2">Cookies and Settings</a>
                    <a href="#" className="text-white mb-2">Privacy</a>
                    <a href="#" className="text-white mb-2">Terms and Conditions</a>
                </div>
                // Contact Form
            <form className="flex flex-col items-center">
                <div className="text-white mb-2">Contact Us</div>
                <input type="text" placeholder="Name" className="mb-2" />
                <input type="email" placeholder="Email" className="mb-2" />
                <input type="text" placeholder="Message" className="mb-2" />
                <button
                    type="submit"
                    className="bg-blue-700 text-white font-bold p-2 w-1/2 flex items-center justify-center mx-auto hover:bg-white hover:text-blue-950 rounded-lg shadow-md shadow-white ">
                    Submit
                </button>
            </form>
        </div> * /}

            {/* 3rd Section */ }
            <div className="grid sm:grid-cols-2 items-center text-center gap-1 sm:gap-8 px-16 py-2 pt-4 sm:py-4 border-t-2">
                <div className="flex items-center text-center justify-center flex-col ">
                    <p className="font-bold mb-2">Head Office Address:</p>
                    <p>Rachana Vidhyalay Lane, Canada Corner, Plot No.5 Alankar, Sharanpur Rd, Nashik, Maharashtra 422005
                    </p>
                </div>
                <div className="flex flex-col my-4 mx-auto">
                    <div className="flex items-center">
                        <a href={footerData.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook className="mr-2 hover:scale-150 w-[1rem] h-[1rem] sm:w-8 sm:h-6 hover:text-blue-700" /></a>
                        <a href={footerData.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="mr-2 hover:scale-150 w-[1rem] h-[1rem] sm:w-8 sm:h-6 hover:text-white/60 bg-gradient-to-r hover:from-violet-600 hover:via-red-500 hover:to-yellow-500 hover:rounded-md" /></a>
                        <a href={footerData.linkedIn} target="_blank" rel="noopener noreferrer"> <FaLinkedin className="mr-2 hover:scale-150 w-[1rem] h-[1rem] sm:w-8 sm:h-6 hover:text-blue-700" /></a>
                        <a href={footerData.twitter} target="_blank" rel="noopener noreferrer"><BsTwitterX className="mr-2 hover:scale-150 w-[1rem] h-[1rem] sm:w-8 sm:h-6 hover:text-black" /></a>
                        <a href={footerData.google} target="_blank" rel="noopener noreferrer"><FaGoogle className="mr-2 hover:scale-150 w-[1rem] h-[1rem] sm:w-8 sm:h-6 bg-gradient-to-r hover:text-white/90 hover:border-2 hover:from-red-500 hover:via-yellow-500 hover:to-green-500 hover:border-blue-700 hover:rounded-full" /></a>
                        <a href={footerData.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube className="mr-2 hover:scale-150 w-[1rem] h-[1rem] sm:w-8 sm:h-6 hover:text-red-700" /></a>
                    </div>
                </div>
            </div>
            {/* 4th Section */}
            <div className=' items-center text-3xs sm:text-sm text-center italic py-4 border-y-2'>
                <p>Copyright Vidya Educational Academy @ 2024, by <a href="https://xsavlab.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:text-white">XSAV-Lab</a></p>
            </div>
        </footer >
    );

};

export default Footer;
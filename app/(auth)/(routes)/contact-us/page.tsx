"use client";
import React, { useState } from "react";
import { ContactForm } from "./components/contact-form";

// A component to render the contact-us page
const Page = () => {
    return (
        <div className="flex flex-col w-[90vw] mx-auto py-8 bg-blue-200 text-blue-950">
            <div className="text-3xl md:text-4xl lg:text-5xl w-full font-bold text-center mb-4">
                Contact Us
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full mx-auto">
                <div className='w-full flex mx-auto h-auto py-4'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.6090769270354!2d73.77292503486582!3d20.001611379431598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95f2b788f165%3A0x6c9108cc4d971322!2sVidya%20Educational%20Academy%20-%20NEET%7C%20JEE%7C%20NDA%7C%20Foundation%20Course%7C%20Hostel%20Facility%7C%20CBSE%7C%20SSC%20%7C%20Best%20coaching%20classes%20in%20Nashik!5e0!3m2!1sen!2sin!4v1706968837263!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        className="w-full h-full">
                    </iframe>
                </div>
                <div className="px-4 py-2 w-full flex flex-col bg-gray-300 rounded-md text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif">
                        Fill the Form
                        <span className="ml-1 md:ml-2 animate-text-change underline text-sm">!! Click Send !!</span>
                    </div>
                    <div className="text-base mt-2">
                        We would love to hear from you. Whether you have a question, a
                        feedback, or a suggestion, please feel free to contact us using the
                        form below. We will get back to you as soon as possible.
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div >
    );
};

export default Page;

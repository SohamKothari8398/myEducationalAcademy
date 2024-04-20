"use client";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const Reviews = () => {
    const getColorForStars = (stars: number): string => {
        switch (stars) {
            case 5:
                return "#b68e01"; // Dark Gold
            case 4:
                return "#ffd700"; // Yellow
            case 3:
                return "#3fb950"; // Green
            case 2:
                return "#ff8c00"; // Orange
            case 1:
                return "#ff4f4f"; // Red
            default:
                return "#000000"; // Black
        }
    }

    useEffect(() => {
        AOS.init();
    }, []);

    const testimonials = [
        {
            name: "John Doe",
            category: "Parent",
            title: "Great Experience",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 5
        },
        {
            name: "Jane Smith",
            category: "Student",
            title: "Highly Recommend",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 4
        },
        {
            name: "John Doe",
            category: "Parent",
            title: "Great Experience",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 3
        },
        {
            name: "Jane Smith",
            category: "Student",
            title: "Highly Recommend",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 2
        },
        {
            name: "Jane Smith",
            category: "Student",
            title: "Highly Recommend",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 1
        },
        {
            name: "Jane Smith",
            category: "Student",
            title: "Highly Recommend",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 2
        },
        {
            name: "John Doe",
            category: "Parent",
            title: "Great Experience",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 3
        },
        {
            name: "John Doe",
            category: "Parent",
            title: "Great Experience",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 4
        },
        {
            name: "Jane Smith",
            category: "Student",
            title: "Highly Recommend",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus eget metus suscipit tempor.",
            stars: 5
        },
    ];

    return (
        <div className="flex flex-col text-blue-950 w-full h-auto py-8 px-10">
            <div data-aos="fade-right" data-aos-delay="100" className="flex text-center justify-center text-lg md:text-2xl lg:text-4xl font-bold underline underline-offset-4 italic">Reviews</div>
            <div className="flex overflow-x-auto gap-8 p-4 mt-4 text-white text-lg font-semibold text-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay="200" className="flex flex-col text-blue-950 mx-auto px-4 py-4 bg-white w-[20rem] h-auto hover:scale-125 shadow-lg rounded-lg shadow-black">
                        <div className="bg-blue-900 mx-auto mb-4 w-[18rem] h-[12rem] rounded-xl shadow-lg shadow-black"></div>
                        <div className="mx-auto text-xs sm:text-sm md:text-base font-bold">{testimonial.name}, {testimonial.category}</div>
                        <div className="mx-auto text-xs sm:text-sm md:text-base font-semibold">{testimonial.title}</div>
                        <div className="flex gap-1 justify-center items-center mt-2">
                            {[...Array(testimonial.stars)].map((star, i) => (
                                <AiFillStar key={i} size={20} color={getColorForStars(testimonial.stars)} />
                            ))}
                        </div>
                        <div className="mx-auto text-xs font-normal">{testimonial.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews;
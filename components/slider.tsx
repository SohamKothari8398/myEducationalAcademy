"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SliderProps {
    sliderImages: string[];
}

const Slider: React.FC<SliderProps> = ({ sliderImages }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage(prev => (prev === sliderImages.length - 1 ? 0 : prev + 1));
        }, 10000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    return (
        <div className=" relative z-0 w-full mx-auto h-[40vh] sm:h-[60vh] lg:h-[75vh] pt-4 overflow-hidden my-4">
            {sliderImages.map((image: string, index: number) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transform ${index === currentImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        } transition-opacity duration-500 ease-in-out`}
                >
                    <Image
                        src={image}
                        alt={`Slider Image ${index + 1}`}
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        className="object-contain w-auto h-auto"
                    />
                </div>
            ))}

            <div className="absolute top-0 left-1/2 mt-2 gap-4 transform -translate-x-1/2 flex items-center">
                {sliderImages.map((_: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 md:w-4 md:h-4 bg-sky-300 rounded-full focus:outline-none ${index === currentImage ? 'ring ring-blue-950' : ''
                            }`}
                    />
                ))}
            </div>

            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden space-x-2 items-center">
                <div className=" hover:text-white cursor-pointer text-xl sm:text-2xl md:text-3xl bg-sky-300 flex h-auto p-1 md:p-2 shadow-sm shadow-black justify-center items-center rounded-full">
                    <FaChevronLeft onClick={handlePrev} />
                </div>
                {sliderImages.map((_: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 md:w-[1rem] md:h-[1rem] bg-sky-300 rounded-full focus:outline-none ${index === currentImage ? 'ring ring-blue-950' : ''
                            }`}
                    />
                ))}
                <div className=" hover:text-white cursor-pointer text-xl sm:text-2xl md:text-3xl bg-sky-300 flex h-auto p-1 md:p-2 shadow-sm shadow-black justify-center items-center rounded-full">
                    <FaChevronRight onClick={handleNext} />
                </div>
            </div> */}
        </div>
    );
};
export default Slider;
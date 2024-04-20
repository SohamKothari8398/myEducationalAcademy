"use client";
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface VideoSliderProps {
    sliderVideos: string[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ sliderVideos }) => {
    const [currentVideo, setCurrentVideo] = useState(0);

    const handlePrev = () => {
        setCurrentVideo(prev => (prev === 0 ? sliderVideos.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentVideo(prev => (prev === sliderVideos.length - 1 ? 0 : prev + 1));
    };

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrentVideo(prev => (prev === sliderVideos.length - 1 ? 0 : prev + 1));
    //     }, 10000);
    //     return () => clearInterval(timer);
    // }, [sliderVideos.length]);

    return (
        <div className="relative z-0 w-full mx-auto h-[40vh] shadow-xl shadow-black rounded-xl mb-10 sm:h-[60vh] lg:h-[75vh] overflow-hidden my-4">
            {sliderVideos.map((video: string, index: number) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transform ${index === currentVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        } transition-opacity duration-500 ease-in-out`}
                >
                    <iframe
                        src={video}
                        title={`Slider Video ${index + 1}`}
                        width="100%"
                        height="100%"
                        style={{ border: "none" }}
                    />
                </div>
            ))}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 items-center">
                <div className="hover:text-white cursor-pointer text-xl sm:text-2xl md:text-3xl bg-sky-300 flex h-auto p-1 md:p-2 shadow-sm shadow-black justify-center items-center rounded-full">
                    <FaChevronLeft onClick={handlePrev} />
                </div>
                {sliderVideos.map((_: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentVideo(index)}
                        className={`w-2 h-2 md:w-[1rem] md:h-[1rem] bg-sky-300 rounded-full focus:outline-none ${index === currentVideo ? 'ring ring-blue-950' : ''
                            }`}
                    />
                ))}
                <div className="hover:text-white cursor-pointer text-xl sm:text-2xl md:text-3xl bg-sky-300 flex h-auto p-1 md:p-2 shadow-sm shadow-black justify-center items-center rounded-full">
                    <FaChevronRight onClick={handleNext} />
                </div>
            </div>
        </div>
    );
};

export default VideoSlider;

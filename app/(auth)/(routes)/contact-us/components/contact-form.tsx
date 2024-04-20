"use client";
import React, { useState } from "react";

interface ContactFormData {
    name: string;
    schoolName: string;
    age: number;
    mobileNumber: number;
    email: string;
    address: string;
    message: string;
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        schoolName: "",
        age: 0,
        mobileNumber: 0,
        email: "",
        address: "",
        message: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact-us", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log("Form submission response:", data);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later." + error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 text-blue-950 w-full">
            <div className="grid gap-4 w-full text-base md:text-lg font-bold">
                <div className="flex flex-col">
                    <label htmlFor="name" className="">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md p-1 md:p-2 w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name" className="">
                        School Name
                    </label>
                    <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md p-1 md:p-2 w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min={10}
                        max={25}
                        className="border border-gray-300 rounded-md p-1 md:p-2 w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="">
                        Mobile Number
                    </label>
                    <input
                        type="number"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        min={1000000000}
                        max={9999999999}
                        className="border border-gray-300 rounded-md p-1 md:p-2 w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md p-1 md:p-2 w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subject" className="">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md p-1 md:p-2 w-full"
                    />
                </div>
            </div>
            <div className="grid mt-4 text-base md:text-lg font-bold">
                <label htmlFor="message" className="">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md p-1 md:p-2 w-full h-20 md:h-32"
                />
            </div>
            <div className="flex justify-center items-center mt-4 text-xs md:text-base lg:text-lg">
                <button
                    type="submit"
                    className="bg-green-500 text-white font-bold py-2 px-8 rounded-md hover:bg-white hover:text-green-700 shadow-md shadow-black"
                >
                    Send
                </button>
            </div>
        </form>
    );
};


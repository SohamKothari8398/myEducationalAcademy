"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const staff = [
    {
        name: "Er.Santosh Kumar Pandey",
        role: "Director, Founder, Motivational Speaker and Physics Teacher",
        qualifications: "B.Tech(Mechanical)",
        image: "https://drive.google.com/uc?id=1S723oVYr_Ckuv_DVoDBdW9xtvRZIAUJl",
        experience: "12 YOE in the Teaching",
        bio: "As the Educational Director, my role is to ensure a dynamic and enriching learning environment for students while fostering a strong partnership with parents. I oversee curriculum development, teacher training, and student support services to promote academic excellence and holistic growth. I strive to maintain open communication channels with both students and parents, addressing any concerns and providing guidance to enhance the educational experience. Together, we work towards cultivating a culture of lifelong learning and success.",
        others: "GATE -AIR370, IIT AIR-2",
    },
    {
        name: "Mrs.Shweta Santosh Pandey",
        role: "Chairman",
        qualifications: "M.A/FASHION DESIGNER",
        experience: "10 YOE",
        image: "https://drive.google.com/uc?id=18A6K4gb1O7QDcasJQ61JhP8efFR1BEzh",
        bio: `Education is a journey that requires collaboration between students, parents, and educators, and I am thrilled to be a part of this journey with you all.
        To our esteemed parents, thank you for entrusting us with the education and well-being of your children. Together, we can create an environment where every child can thrive academically, socially, and emotionally.`,
    },
    {
        name: "Er.Vishanu Kumar Yadav",
        role: "Managing Director",
        qualifications: "B.Tech(Mechanical)",
        image: "https://drive.google.com/uc?id=1Ywd2hsRpk6Y52Dsd2vh9-ZJ_NAH-I4YK",
        bio: `As the Educational Chairman, it gives me great pleasure to extend a warm welcome to each of you as we embark on another enriching academic year. Education is a journey that requires collaboration between students, parents, and educators, and I am thrilled to be a part of this journey with you all.
        To our esteemed parents, thank you for entrusting us with the education and well-being of your children. Your support and involvement in your child's education are invaluable, and we are committed to working hand in hand with you to ensure their success. Please feel free to reach out to us at any time with questions, concerns, or suggestions.`,
    },
    {
        name: "Mr.Manish Tiwari",
        role: "CEO",
        qualifications: "Graduated from Guru Nanak Dev University Amritsar",
        experience: "10 YOE",
        image: "https://drive.google.com/uc?id=1NLK4SOr_9Qxod5TH6snZi0a3AednQ41H",
        bio: "Mr.Manish Tiwari, a visionary leader in the realm of education, serves as the esteemed CEO of Vidya Educational Academy. Armed with a steadfast commitment to academic excellence and student empowerment, Manish has steered Vidya Educational Academy towards unparalleled success.",
    },
];

const foundationCourse = [
    {
        title: "Medical Foundation Course",
        description: `The Medical Foundation Course for high school students offers a comprehensive introduction to medicine, healthcare, and medical imaging.
      Covering topics like anatomy, physiology, radiography, and patient care, it fosters curiosity and critical thinking.
      Through hands-on activities and lectures, students gain insight into medical practices, ethics, and career pathways,
      preparing them for future studies and professions in healthcare.`,
    },
    {
        title: "Engineering Foundation Course",
        description: `The Engineering Foundation Course meticulously equips students with essential knowledge for success across diverse engineering disciplines.
      Tailored for exams like JEE mains, Advance, and Olympiads, it covers mathematics, physics, chemistry, and engineering fundamentals. 
      Specialized support for fields like Railway and Financial Engineering is included. Through rigorous preparation and expert guidance, 
      students develop a strong foundation for pursuing undergraduate engineering degrees. This course ensures readiness for university-level study in any 
      engineering branch.`,
    },
    {
        title: "Defence Foundation Course",
        description: `The Defense Foundation Course meticulously prepares aspiring individuals for a range of entrance exams, including NDA, NA, TES Indian Army, 
      B.Tech Navy Entry Scheme, IMU Maritime University, and more. Tailored to instill fundamental knowledge and enhance physical and mental readiness for roles in 
      the Indian Defense Services, the program emphasizes mathematics, science, and specialized subjects like PCMB and PCB for Nursing, Navy, Army. 
      This comprehensive approach ensures that students are well-equipped to pursue successful careers within the defense sector, laying a strong groundwork for 
      their future endeavors.`
    },
    {
        title: "Foundation Course",
        description: `The Foundation Course offers a comprehensive program tailored for students in grades 5 through 10, with the goal of preparing them for various scholarship exams and admission tests.
      Focusing on assessments like NTSE, NLSTSEC, KVPY, INO, and more, as well as entry exams for institutions like Navodaya Vidyalaya and Sainik School, 
      it ensures thorough preparation for academic success. Covering subjects such as science, mathematics, communication skills, and general knowledge, the course 
      provides students with the necessary knowledge and skills to excel in these competitive assessments. With expert guidance and comprehensive study materials, 
      it empowers students to achieve exceptional results and unlock their full academic potential.`
    }
];

const products = [
    {
        name: "Medical",
        image: "https://drive.google.com/uc?id=1jFq9SVwfc9YI1UR_bCCWMrqcnUGaAi08",
        description: "Prepare for the National Eligibility cum Entrance Test with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
    },
    {
        name: "Engineering",
        image: "https://drive.google.com/uc?id=1hr21Isse2WH2c9bRkQqF7zhVg3zfW1Eb",
        description: "Prepare for the Joint Entrance Examination with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
    },
    {
        name: "Defence",
        image: "https://drive.google.com/uc?id=1hr21Isse2WH2c9bRkQqF7zhVg3zfW1Eb",
        description: "Prepare for the National Defence Academy entrance exam with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
    },
    {
        name: "NDA",
        image: "https://drive.google.com/uc?id=1hr21Isse2WH2c9bRkQqF7zhVg3zfW1Eb",
        description: "Prepare for the Marine Engineering entrance exam with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
    },
    {
        name: "Foundation",
        image: "https://drive.google.com/uc?id=1QdSwE-bAWWIZB2IzusMHSFHwfW_00CZ2",
        description: "Learn Physics, Chemistry, Mathematics, and Biology for the 11th and 12th standard with our comprehensive and interactive course. Learn from the best faculty and get access to mock tests, doubt sessions, and study materials.",
    },
    {
        name: "KVPY",
        image: "https://drive.google.com/uc?id=1wRCMDgEvCpWz-wPrCzqRA5arS2G7bvej",
        description: "Get guidance and advice from our expert career counsellors and discover your true potential and passion. Explore various career options and make informed decisions about your future.",
    },
];

const sections = [
    {
        heading: "Vision",
        image: "https://drive.google.com/uc?id=1tldpZOpshJN52XBLpMboqPomANlzVlGm",
        description: "Our Vision is to provide a transformative learning experience for teenagers preparing for competitive exams such as NEET, JEE, and NDA. We prioritize holistic learning by offering a comprehensive education that extends beyond exam syllabi, fostering critical thinking, problem-solving skills, and conceptual clarity. Our personalized coaching ensures that each student receives individualized attention tailored to their learning needs and pace. Through innovative teaching methods, including interactive sessions and technology integration, we make learning engaging and effective. We prioritize the mental and emotional well-being of our students, offering counseling support and stress management techniques. Upholding ethical practices, transparency, and fairness in all aspects of teaching and evaluation, we aim to empower students with the skills and knowledge needed for success. Continuous assessment and feedback help students improve continuously, while career guidance and community engagement ensure they are well-prepared for future academic and professional endeavors."
    },
    {
        heading: "Mission",
        image: "https://drive.google.com/uc?id=1zR23PyOMICweIVMqvhEr2hbayfF9S2y5",
        description: "Our mission is to prepare teenagers comprehensively for competitive exams like JEE, NEET, and NDA, aiming for top rankings such as AIR-1. We prioritize holistic learning, ensuring students develop critical thinking, problem-solving skills, and conceptual clarity alongside exam syllabi. Through personalized attention, innovative teaching methods, and a supportive environment, we foster student well-being and growth. Upholding ethical standards, providing continuous assessment and feedback, offering career guidance, and engaging with the community, we aim to empower students not only to excel in exams but also to succeed in their future academic and professional endeavors."
    },
    {
        heading: "History",
        image: "https://drive.google.com/uc?id=1S723oVYr_Ckuv_DVoDBdW9xtvRZIAUJl",
        // image: "https://drive.google.com/uc?id=1fmhbGo7Wp9c91RbyGReaZmm2k8bUUzFf",
        description: "Founded in 2019 in Nashik, Vidya Educational Academy stands as a testament to the vision and dedication of Late. Vidya Devi, who despite battling cancer until her passing in 2019, devoted her life to ensuring quality education for her child. Believing fervently that education is the cornerstone of societal progress and upliftment, she instilled in her child the values of knowledge and service. Named in her honor, the academy embodies her unwavering commitment to education. Since its inception, Vidya Educational Academy has been a beacon of excellence, striving to prepare teenagers for a future of success and leadership. With a focus on comprehensive preparation for competitive exams such as JEE, NEET, and NDA, the academy aims not just for excellence but for AIR-1 rankings, shaping students to excel in the medical, engineering, and defense sectors. The history of Vidya Educational Academy is not just one of academic achievement but also a tribute to the indomitable spirit of a mother's love and perseverance in the face of adversity.",
    },
];

const activities = [
    {
        title: "Public Speaking",
        description:
            "We train our students to become confident and effective speakers who can express their ideas clearly and persuasively.",
        image: "https://drive.google.com/uc?id=1JH91Z8TAJYcS474yA7Q-aiD7BlLkkCmX",
    },
    {
        title: "Presentations",
        description:
            "We teach our students how to create and deliver engaging and informative presentations using various tools and techniques.",
        image: "https://drive.google.com/uc?id=1H2OQHF_dflpNBOn-vISFA5UYWa8Fj74m",
    },
    {
        title: "Debates",
        description:
            "We encourage our students to participate in debates on various topics and issues, where they can develop their critical thinking and argumentation skills.",
        image: "https://drive.google.com/uc?id=1H2OQHF_dflpNBOn-vISFA5UYWa8Fj74m",
    },
    {
        title: "Guest Lectures",
        description:
            "We encourage our students to attend Guest Motivational Lectures by State Officers, Highly Qualified Individuals, Alumni and Class Toppers to motivate to successfully produce great results.",
        image: "https://drive.google.com/uc?id=1JH91Z8TAJYcS474yA7Q-aiD7BlLkkCmX",
    },
];

const services = [
    {
        title: "Counselling",
        description:
            "We provide counselling services to our students to help them cope with academic stress, personal issues, and career choices.",
        image: "https://drive.google.com/uc?id=1JH91Z8TAJYcS474yA7Q-aiD7BlLkkCmX",
    },
    {
        title: "Periodic PTA Meeting",
        description:
            "We conduct periodic meetings every 2 months with the parents and teachers of our students to discuss their progress, feedback, and suggestions.",
        image: "https://drive.google.com/uc?id=1JH91Z8TAJYcS474yA7Q-aiD7BlLkkCmX",
    },
    {
        title: "Test Series",
        description:
            "We conduct unit tests, monthly test series for PCM, PCMB, PCB, English and other languages for the aspiring Engineers, Doctors, Army, Navy, IIT and many more.",
        image: "https://drive.google.com/uc?id=1H2OQHF_dflpNBOn-vISFA5UYWa8Fj74m",
    },
    {
        title: "Progress Report Sharing",
        description:
            "We share the progress reports of our students with their parents and teachers, where they can see their performance, attendance, and improvement areas.",
        image: "https://drive.google.com/uc?id=1H2OQHF_dflpNBOn-vISFA5UYWa8Fj74m",
    },
];

const Page = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="flex flex-col w-screen bg-blue-200 h-auto items-center justify-between text-blue-950 px-4 sm:px-16">
            <div className="text-3xl md:text-4xl lg:text-5xl py-4 font-bold mt-5 sm:mt-10">About - Us</div>
            <div className=" grid sm:grid-cols-3 items-center justify-center overflow-x-auto w-full text-blue-100 p-4 h-auto sm:gap-8 my-8">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col px-10 items-center justify-center mx-auto bg-blue-950 rounded-xl pb-4 sm:pb-10 w-full h-auto">
                        <div className="text-xl my-1 sm:my-2 sm:text-3xl text-center font-semibold mt-4">{section.heading}</div>
                        <div className="text-xs sm:text-sm text-start font-sans my-4 sm:my-4">{section.description}</div>
                        <div className="w-full h-auto items-center justify-center">
                            <Image src={section.image} alt={section.heading} width={500} height={240} className="mt-4 items-center justify-center rounded-xl shadow-xl shadow-black" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-2xl underline md:text-3xl lg:text-4xl my-10 sm:mb-8 italic font-sans font-bold text-center">Activities</div>
            <div className="grid xs:grid-cols-2 sm:grid-cols-4 lg:flex-row w-full gap-2 sm:gap-8 justify-evenly">
                {activities.map((activity) => (
                    <motion.div
                        key={activity.title}
                        className="flex flex-col items-center bg-blue-950 text-blue-100 px-4 py-4 w-full border-2 border-gray-300 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image
                            src={activity.image}
                            alt={activity.title}
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                        <div className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">{activity.title}</div>
                        <div className="text-sm md:text-base lg:text-lg font-medium mt-2">{activity.description}</div>
                    </motion.div>
                ))}
            </div>
            <div className="text-2xl underline md:text-3xl lg:text-4xl my-10 sm:mb-8 italic font-sans font-bold text-center">Services</div>
            <div className="grid xs:grid-cols-2 sm:grid-cols-4 lg:flex-row w-full gap-2 sm:gap-8 justify-evenly">
                {services.map((service) => (
                    <motion.div
                        key={service.title}
                        className="flex flex-col items-center bg-blue-950 text-blue-100 px-4 py-4 w-full border-2 border-gray-300 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                        <div className="text-sm my-1 sm:my-2 sm:text-xl font-semibold mt-4">{service.title}</div>
                        <div className="text-xs my-1 sm:my-2 sm:text-lg text-justify mt-2">{service.description}</div>
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-col w-full p-0 sm:p-2 md:p-4">
                <h2 className="text-2xl underline md:text-3xl lg:text-4xl my-10 sm:mb-8 italic font-sans font-bold text-center">Our Team</h2>
                <div className="flex flex-row gap-4 md:gap-12 overflow-x-auto">
                    {staff.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-auto bg-blue-950 text-blue-100 font-serif justify-center items-center p-2 md:p-4 shadow-lg rounded-lg"
                            data-aos="fade-up"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={300}
                                height={200}
                                className="rounded-full"
                            />
                            <h3 className=" text-sm my-1 sm:my-2 sm:text-xl font-bold text-center">{member.name}</h3>
                            <h4 className=" text-xs my-1 sm:my-2 sm:text-lg text-center font-semibold">{member.role}</h4>
                            <h4 className=" text-xs my-1 sm:my-2 sm:text-lg text-center font-semibold">{member.qualifications}</h4>
                            <p className=" text-2xs my-1 sm:my-2 sm:text-sm text-justify">{member.bio}</p>
                            <h4 className=" text-2xs my-1 sm:my-2 sm:text-sm text-center font-semibold">{member.others}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-full px-4">
                <h2 className="text-2xl underline md:text-3xl lg:text-4xl my-10 sm:mb-8 italic font-sans font-bold text-center">Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-4 sm:py-8 gap-4 sm:gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-blue-950 text-blue-100 px-4 py-4 w-full sm:w-full border-2 border-gray-300 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={600}
                                height={200}
                                className="rounded-lg"
                            />
                            <h3 className=" text-sm my-1 sm:my-2 sm:text-xl font-bold text-center">{product.name}</h3>
                            <div className=" text-2xs my-1 sm:my-2 sm:text-sm text-justify"> {product.description}  </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};
export default Page;

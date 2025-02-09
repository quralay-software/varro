import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { about4HeroData } from '../../data/about4Hero';
import { about4ContentData } from '../../data/about4Content';

const About4Hero = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = about4HeroData[currentLang];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 lg:pr-12"
                    >
                        <span className="text-primary text-lg sm:text-xl mb-3 sm:mb-4 block">
                            {data.company}
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mb-4 sm:mb-6">
                            {data.title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl">
                            {data.description}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <Image
                                src='/images/img-7.JPG'
                                alt={data.image.alt}
                                width={800}
                                height={600}
                                className="rounded-2xl sm:rounded-3xl object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
                            />
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl sm:rounded-3xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const About4 = (props) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = about4ContentData[currentLang];

    const projectImages = [
        { src: '/images/img-2.JPG', alt: 'Project Image 2' },
        { src: '/images/img-4.JPG', alt: 'Project Image 4' },
        { src: '/images/img-6.JPG', alt: 'Project Image 6' },
        { src: '/images/img-9.JPG', alt: 'Project Image 9' },
    ];

    return (
        <>
            <About4Hero />
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="max-w-4xl mx-auto">
                                <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-[-1rem] sm:mt-[-2rem]">
                                    {projectImages.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className="house-info"
                                            style={{"--h": "40px"}}
                                            initial={{ y: 50, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <div className="relative">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={800}
                                                    height={600}
                                                    className={`w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover ${index < 2 ? "image-mask" : "content-mask"} ${index % 2 === 0 ? "scale-x-[-1]" : ""}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                         <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="project-text">
                                <h2 className='text-3xl sm:text-4xl md:text-5xl text-primary my-4 sm:my-6 md:my-8 font-sans'>{data.main_title}</h2>
                                <p className="text-base sm:text-lg mb-4">{data.description1}</p>
                                <p className="text-base sm:text-lg">{data.description2}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default About4;

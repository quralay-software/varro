import React from 'react';
import Link from 'next/link';
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
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
                    >
                        <span className="text-primary text-xl mb-4 block">
                            {data.company}
                        </span>
                        <h1 className="text-5xl font-bold font-sans mb-6">
                            {data.title}
                        </h1>
                        <h2 className="text-3xl font-bold text-gray-700 mb-6">
                            {data.subtitle}
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                            {data.description}
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {data.stats.experience.value}
                                </div>
                                <div className="text-lg text-gray-600">
                                    {data.stats.experience.label}
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {data.stats.production.value}
                                </div>
                                <div className="text-lg text-gray-600">
                                    {data.stats.production.unit}
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {data.stats.employees.value}
                                </div>
                                <div className="text-lg text-gray-600">
                                    {data.stats.employees.label}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <Image
                                src='/images/img-7.JPG'
                                alt={data.image.alt}
                                width={800}
                                height={600}
                                className="rounded-none object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
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

    return (
        <>
            <About4Hero />
            <section className={`Arkitek-about-section ${props.abClass}`}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-8 col-12">
                            <div className="about-left-item">
                                <div className="wpo-section-title">
                                    <span>{data.section_title}</span>
                                    <h2 className='font-sans text-4xl font-bold'>{data.main_title}</h2>
                                    <p>
                                        {data.description1}
                                    </p>
                                    <p>
                                        {data.description2}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-12">
                            <div className="about-middle-item">
                                <Image
                                src='/images/img-8.JPG'
                                width={800}
                                height={800}
                                alt={data.operations_image.alt} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-12">
                            <div className="about-right-item">
                                <p>
                                    <span>Н</span>{data.right_content.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}

export default About4;

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Services from '../../api/Services';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serviceSectionData } from '../../data/serviceSection';

const ServiceSection = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = serviceSectionData[currentLang];
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Create an extended array for infinite scroll effect
    const extendedServices = useMemo(() => {
        const services = data.services;
        // Create a triple-repeated array for smooth infinite scroll
        return [...services, ...services, ...services];
    }, [data.services]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isAutoPlaying && !isTransitioning) {
            interval = setInterval(() => {
                nextSlide();
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [currentSlide, isAutoPlaying, isTransitioning]);

    // Handle infinite scroll without visual reversion
    useEffect(() => {
        if (isTransitioning) return;
        const originalLength = data.services.length;

        // Only reset the slide counter for dots, don't affect visual position
        if (currentSlide >= originalLength) {
            setCurrentSlide(0);
        }
    }, [currentSlide, data.services.length, isTransitioning]);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setCurrentSlide(current => current + 1);
        }
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (!isTransitioning) {
            setCurrentSlide(current => current - 1);
        }
    }, [isTransitioning]);

    const goToSlide = (index) => {
        if (!isTransitioning) {
            setCurrentSlide(index + 2);
        }
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="relative bg-[#0A1439] px-6 md:px-12 lg:px-24 py-16 overflow-hidden">
            {/* Background shapes */}
            <div className="absolute left-0 top-0 -z-10 w-full max-w-[596px]">
                <svg width="100%" height="100%" viewBox="0 0 596 590" fill="none" preserveAspectRatio="xMinYMin">
                    <path d="M148 590L596 0H0L148 590Z" fill="#0B1742" />
                </svg>
            </div>
            <div className="absolute right-0 bottom-0 -z-10 w-full max-w-[328px]">
                <svg width="100%" height="100%" viewBox="0 0 328 510" fill="none" preserveAspectRatio="xMaxYMax">
                    <path d="M62 0L328 226V510H62L0 472L62 0Z" fill="#0B1742" />
                </svg>
            </div>

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    <div className="w-full lg:w-[414px] mb-10 lg:mb-0">
                        <div className="text-left lg:pr-8">
                            <h2 className="text-white text-4xl md:text-5xl font-normal leading-tight mb-5">
                                {data.title}
                            </h2>
                            <p className="text-white mb-5">
                                {data.description}
                            </p>
                            
                        </div>
                    </div>

                    <div className="w-full lg:w-[calc(100%-414px)] lg:ml-[70px] relative">
                        {/* Gradient overlays for fade effect */}
                        {/* Gradient overlays for fade effect - desktop only */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A1439] to-transparent z-10 hidden lg:block"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A1439] to-transparent z-10 hidden lg:block"></div>

                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    transform: `translateX(-${((currentSlide * (isMobile ? (window.innerWidth * 0.9) : 384)))}px)`,
                                    transition: 'transform 500ms ease-out'
                                }}
                            >
                                {extendedServices.map((service, index) => {
                                    const serviceData = Services.find(s => s.slug === service.slug);
                                    if (!serviceData) return null;

                                    return (
                                        <div
                                            key={index}
                                            className="lg:w-96 w-80 flex-shrink-0"
                                            style={{ marginRight: '24px' }}
                                        >
                                            <div className="p-4 lg:p-12 text-center bg-gradient-to-b from-[#1E2850] via-[#1E2850] to-[#0A1439] h-full">
                                                <div className="mb-6">
                                                    <Image
                                                        src={serviceData.sImg}
                                                        alt={service.title}
                                                        className="mx-auto"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="mb-4">
                                                        <Link
                                                            href="/services"
                                                            onClick={ClickHandler}
                                                            className="text-white hover:text-[#D9916A] transition-colors"
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    </h2>
                                                    <p className="text-white/80">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-2 mt-8">
                            {data.services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 lg:h-3 rounded-full transition-all border-none duration-300 ${
                                        currentSlide % data.services.length === index
                                            ? 'w-8 lg:w-16 bg-primary'
                                            : 'w-4 lg:w-8 bg-primary opacity-50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;

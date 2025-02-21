import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { hero3Data } from "../../data/hero3";
import Footer from "../footer/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero3 = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const heroData = hero3Data[currentLang];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const totalHeroSlides = heroData.images?.length || 1;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % totalHeroSlides);
  };

  const prevSlide = () => {
    setCurrentHeroSlide((prev) =>
      prev === 0 ? totalHeroSlides - 1 : prev - 1
    );
  };

  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (diff > 50) {
      prevSlide();
    } else if (diff < -50) {
      nextSlide();
    }
    setTouchStartX(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-with-services h-screen overflow-hidden flex flex-col">
      {/* titel descr */}
      <div className="relative bg-white px-6 md:px-12 lg:px-24 overflow-hidden h-[20%] flex-shrink-0 mt-20">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full">
            <div className="text-center">
              <h2 className="text-black text-2xl md:text-4xl font-normal leading-tight mb-2">
                {heroData.generalTitle}
              </h2>
              <span className="block h-1 mt-2 mb-2 bg-primary w-full"></span>
              <p className="text-black text-sm md:text-lg">
                {heroData.generalDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* slider for desc/mob */}
      <div className="relative h-[80%]">
        {/* slider touch (mobile) */}
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentHeroSlide * 100}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {heroData.images?.map((img, index) => {
            const service = heroData.services[index];
            return (
              <motion.div
                key={index}
                className="w-full h-full flex-shrink-0 relative"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              >
                <div
                  className="w-full h-full bg-cover bg-center filter brightness-75 blur-[0.5px]"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                  <motion.h2
                    className="text-white font-bold text-3xl sm:text-5xl mb-6 text-center"
                    variants={itemVariants}
                  >
                    {service?.title}
                  </motion.h2>
                  <motion.p
                    className="text-white text-center sm:text-2xl sm:max-w-[30%]"
                    variants={itemVariants}
                  >
                    {service?.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className="
            hidden md:flex
            items-center justify-center
            absolute left-4 top-1/2 transform -translate-y-1/2
            w-12 h-12
            rounded-full
            bg-black/70
            border-2 border-white
            text-white
            shadow-md
            hover:bg-black
            transition-colors
          "
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="
            hidden md:flex
            items-center justify-center
            absolute right-4 top-1/2 transform -translate-y-1/2
            w-12 h-12
            rounded-full
            bg-black/70
            border-2 border-white
            text-white
            shadow-md
            hover:bg-black
            transition-colors
          "
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <Footer />
    </section>
  );
};

export default Hero3;

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

  // mob sliced
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


  const mobileSliderVariants = {
    animate: { x: `-${currentHeroSlide * 100}%` },
  };

  return (
    <section className="hero-with-services h-screen overflow-hidden flex flex-col">
      <div className="relative bg-white px-6 md:px-12 lg:px-24 overflow-hidden h-[20%] flex-shrink-0 mt-24">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-black text-2xl md:text-4xl font-normal leading-tight mb-2">
                {heroData.generalTitle}
              </h1>
              <span className="block h-1 mt-2 mb-2 bg-primary w-full"></span>
              <p className="text-black text-sm md:text-lg">
                {heroData.generalDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* clider */}
      <div className="relative h-[70%]">
        {isMobile ? (
          <>
            {/* mob slider */}
            <motion.div
              className="absolute inset-0 flex"
              variants={mobileSliderVariants}
              animate="animate"
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: "pan-y" }}
            >
              {heroData.images?.map((img, index) => {
                const service = heroData.services[index];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 relative"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center filter brightness-75"
                      style={{ backgroundImage: `url(${img.src})` }}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <h2 className="text-white font-bold text-3xl sm:text-5xl mb-6 text-center">
                        {service?.title}
                      </h2>
                      <p className="text-white text-center sm:text-2xl sm:max-w-[30%]">
                        {service?.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
            {/* dots of slider */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
              {heroData.images?.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentHeroSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* desc */}
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentHeroSlide * 100}%)`,
              }}
            >
              {heroData.images?.map((img, index) => {
                const service = heroData.services[index];
                return (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 relative"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center filter brightness-75"
                      style={{ backgroundImage: `url(${img.src})` }}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                      <h2 className="text-white font-bold text-3xl sm:text-5xl mb-6 text-center">
                        {service?.title}
                      </h2>
                      <p className="text-white text-center sm:text-2xl sm:max-w-[30%]">
                        {service?.description}
                      </p>
                    </div>
                  </div>
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
          </>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default Hero3;

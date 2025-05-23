import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useInView } from "react-intersection-observer";
import { strategicDirectionsData } from "../../data/strategicDirections";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const renderTitle = (title, isMobile, id) => {
  if (isMobile && id === 5) {
    if (title.includes("-")) {
      const parts = title.split("-");
      parts[parts.length - 1] = parts[parts.length - 1].replace(/\u200B/g, "");
      return parts.join("").trim();
    }
    return title;
  }

  if (isMobile) {
    return title.replace(/-/g, "");
  }

  if (title.includes("-")) {
    return title.split("-").map((part, idx, arr) => (
      <React.Fragment key={idx}>
        {part.trim()}
        {idx < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  }

  return title;
};


const renderDescription = (description, isMobile) => {
  if (isMobile) {
    return description.replace(/[-\u200B]/g, "");
  }

  if (description.includes("-")) {
    return description.split("-").map((part, idx, arr) => (
      <React.Fragment key={idx}>
        {part.trim()}
        {idx < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  }

  return description;
};

const DirectionCard = ({ direction, isMobile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/75 rounded-lg overflow-hidden border border-gray-200 sm:max-h-[22rem] flex"
    >
      <div className="p-6 sm:p-[10%] h-full relative flex flex-col w-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${direction.color} opacity-10`}
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center flex-grow">
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 relative">
              {renderTitle(direction.title, isMobile, direction.id)}
              <span className="block h-1 mt-2 bg-primary w-[full]"></span>
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              {renderDescription(direction.description, isMobile)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StrategicDirections = () => {
  const [activeDirection, setActiveDirection] = useState(null);
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const content = strategicDirectionsData[currentLang];
  const isMobile = useIsMobile();


  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (!inView) {
      setActiveDirection(null);
    }
  }, [inView]);

  return (
    <section
      id="strategic-directions"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />

      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {content.mainTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {content.directions.map((direction, index) => (
            <motion.div
              key={direction.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <DirectionCard
                direction={direction}
                isMobile={isMobile}
                isActive={activeDirection === direction.id}
                onClick={() =>
                  setActiveDirection(
                    activeDirection === direction.id ? null : direction.id
                  )
                }
                isInView={inView}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicDirections;

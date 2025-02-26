"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "next-i18next";
import { bgpzHistoryData } from "../../data/bgpzHistory";

const TimelineEvent = ({ item, index, isDesktop, isMobile }) => {
  const { year, title, description, achievements } = item;
  const widthClass = isDesktop ? "w-[30%]" : "w-[80%] flex-shrink-0";
  const renderTitle = (title) => {
    if (isMobile) {
      return title;
    }
    if (title.includes(":")) {
      return title.split(":").map((part, idx, arr) => (
        <React.Fragment key={idx}>
          {part.trim()}
          {idx < arr.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return title;
  };

  let heightClass = "";
  if (isDesktop) {
    if (index === 0) {
      heightClass = "min-h-[26rem]";
    } else if (index === 1) {
      heightClass = "min-h-[28rem]";
    } else {
      heightClass = "min-h-[500px]";
    }
  } else {
    heightClass = "min-h-[300px]";
  }

  let marginTopClass = "";
  if (isDesktop) {
    if (index === 0) {
      marginTopClass = "-mt-4";
    } else if (index === 1) {
      marginTopClass = "-mt-12";
    } else if (index === 2) {
      marginTopClass = "-mt-4";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`
        relative bg-white p-4 sm:p-6 md:p-4
        rounded border shadow-sm hover:shadow-md
        transition-shadow duration-300
        mr-4 last:mr-0
        ${widthClass}
        ${heightClass}
        ${marginTopClass}
      `}
    >
      <div className="text-primary font-bold text-lg sm:text-xl md:text-2xl mb-1 text-center">
        {year}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold font-sans mb-2 text-center">
        {renderTitle(title)}
      </h3>
      <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 text-center">
        {renderTitle(description)}
      </p>

      <div className="space-y-2 sm:space-y-3">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="flex items-center"
          >
            <ChevronRight className="text-primary mr-2 sm:mr-4 h-4 w-4 sm:h-6 sm:w-6" />
            <span className="text-gray-600 text-base sm:text-lg">
              {renderTitle(ach)}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const VisionCard = ({ vision, isDesktop, isMobile }) => {
  const widthClass = isDesktop ? "w-[27%]" : "w-[80%] flex-shrink-0";

  const renderTitle = (title) => {
    if (isMobile) {
      return title;
    }
    if (title.includes(":")) {
      return title.split(":").map((part, idx, arr) => (
        <React.Fragment key={idx}>
          {part.trim()}
          {idx < arr.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return title;
  };

  let heightClass = "";
  if (isDesktop) {
    heightClass = "min-h-[37rem]";
  } else {
    heightClass = "min-h-[300px]";
  }

  let marginTopClass = "";
  if (isDesktop) {
    marginTopClass = "-mt-48";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2 * 0.2 }}
      className={`
        relative bg-white p-4 sm:p-6 md:p-4
        rounded border shadow-sm hover:shadow-md
        transition-shadow duration-300
        ${widthClass}
        ${heightClass}
        ${marginTopClass}
      `}
    >
      <h3 className="text-2xl sm:text-3xl font-bold font-sans mb-4 sm:mb-6 text-center">
        {renderTitle(vision.title)}
      </h3>
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center">
        {renderTitle(vision.description)}
      </p>
      <div className="space-y-3 sm:space-y-4">
        {vision.goals.map((goal, idx) => (
          <div key={idx} className="flex items-center">
            <ChevronRight className="text-primary mr-2 sm:mr-4 h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-base sm:text-lg">{renderTitle(goal)}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const BgpzHistory = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const data = bgpzHistoryData[currentLang];

  const timelineArray = data.timeline;
  const futureVision = data.future_vision;

  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section
      id="bgpz-history"
      className="bg-gray-50 py-12 sm:py-16 md:py-20 section-padding"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-primary text-lg sm:text-xl font-sans">
            {data.section_title}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mt-2 sm:mt-3 mb-4 sm:mb-6">
            {data.main_title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-3 sm:mt-4 max-w-3xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* cards cobntainer */}
        {isDesktop ? (
          // desc colums
          <div className="flex items-start w-full justify-between gap-0 relative mt-60">
            <TimelineEvent item={timelineArray[0]} index={0} isDesktop />
            <TimelineEvent item={timelineArray[1]} index={1} isDesktop />
            <VisionCard vision={futureVision} isDesktop />
          </div>
        ) : (
          // mob horizon slider
          <div className="relative overflow-x-auto pb-2 mt-4">
            <div className="flex items-start gap-4">
              <TimelineEvent
                item={timelineArray[0]}
                index={0}
                isDesktop={false}
              />
              <TimelineEvent
                item={timelineArray[1]}
                index={1}
                isDesktop={false}
              />
              <VisionCard vision={futureVision} isDesktop={false} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BgpzHistory;

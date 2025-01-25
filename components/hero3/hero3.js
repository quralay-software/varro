import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

const Hero3 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    return (
      <section className="static-hero-s2">
          <div className="hero-container">
              <div className="hero-inner">
                  <div className="container">
                  <div className="row align-items-center">
                    <div
                        className="col-12 borde border-red-500"
                    >
                        <motion.div
                            className="wpo-static-hero-inner mt-24"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.span variants={itemVariants} className="d-flex flex-column">
                                <span className="d-md-inline d-block">Максимизация ценности ресурсов</span>
                                <span className="d-md-inline d-block">через устойчивое развитие</span>
                            </motion.span>
                            <motion.h2
                                className="title"
                                variants={itemVariants}
                            >
                                VARRO OPERATING GROUP
                            </motion.h2>
                            <motion.div variants={itemVariants}>
                                <Link href="/about" className="theme-btn">
                                    Узнать больше
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                  </div>
                  </div>
              </div>
          </div>
          <motion.div
            className="slider-img-4 border-none shadow-none"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{
                backgroundImage: `url(/images/img-5.JPG)`,
            }}
          />
      </section>
    );
};

export default Hero3;

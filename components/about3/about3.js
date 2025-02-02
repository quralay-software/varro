import React from 'react';
import CountUp from 'react-countup';
import Link from 'next/link';
import abimg from '/public/images/img-3.JPG'
import icon from '/public/images/call.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { about3Data } from '../../data/about3';

const About3 = (props) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = about3Data[currentLang];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const imageScale = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const counterAnimation = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.6
            }
        }
    };

    return (
      <section className="Arkitek-about-section-s3 section-padding">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6 col-12">
                      <motion.div
                        className="about-left-item"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                          <motion.div className="wpo-section-title" variants={fadeInUp}>
                              <motion.span variants={fadeInUp}>{data.sectionTitle}</motion.span>
                              <motion.h2
                                variants={fadeInUp}
                                style={{ fontFamily: 'Arial' }}
                                className='md:text-5xl font-bold text-gray-800 mb-4 mt-4 text-2xl py-8'
                              >
                                  {data.title}
                              </motion.h2>
                              <motion.p variants={fadeInUp}>
                                  {data.description}
                              </motion.p>
                          </motion.div>
                          <motion.div className="left-btn" variants={fadeInUp}>
                              <Link onClick={ClickHandler} href="/about" className="theme-btn">{data.learnMoreButton}</Link>
                              <Link onClick={ClickHandler} className="call" href="/contact">
                                  <div className="icon">
                                      <Image src={icon} alt="" />
                                  </div>
                                  <div className="text">
                                      <span>{data.contact.text}</span>
                                      <h4>{data.contact.phone}</h4>
                                  </div>
                              </Link>
                          </motion.div>
                      </motion.div>
                  </div>
                  <div className="col-lg-6 col-12">
                      <div className="about-right-item">
                          <motion.div
                            className="right-image-1"
                            variants={imageScale}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                          >
                              <Image src={abimg} alt=""/>
                          </motion.div>
                          <motion.div
                            className="right-text"
                            variants={counterAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                          >
                              <div className="info">
                                  <h3><CountUp end={data.experience.value} enableScrollSpy />+</h3>
                                  <p>{data.experience.text}</p>
                              </div>
                          </motion.div>
                      </div>
                  </div>
              </div>
          </div>
          <span id="counter" className='d-none' />
      </section>
    )
}

export default About3;

import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from '/public/images/testimonial/quote-1.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { testimonial3Data } from '../../data/testimonial3';

const Testimonial3 = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = testimonial3Data[currentLang];

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const quoteVariants = {
        hidden: { opacity: 0, rotate: -10 },
        visible: {
            opacity: 1,
            rotate: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
      <section className="Arkitek-testimonial-section s3 section-padding">
          <div className="container">
              <motion.div
                className="row align-items-center testimonial-slider"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                  <div className="col-lg-6 col-md-5 col-12">
                      <motion.div
                        className="testimonial-left-item slider-nav"
                        variants={imageVariants}
                      >
                          <Slider
                            asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={1}
                            fade={true}
                            arrows={false}
                            swipeToSlide={true}
                            focusOnSelect={true}
                          >
                              {data.testimonials.map((tesmnl, tsm) => (
                                <motion.div
                                  className="image"
                                  key={tsm}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.3 }}
                                >
                                    <Image 
                                        src={tesmnl.image} 
                                        alt={tesmnl.name}
                                        width={200}
                                        height={200}
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: '50%'
                                        }}
                                        unoptimized
                                    />
                                </motion.div>
                              ))}
                          </Slider>
                      </motion.div>
                  </div>
                  <div className="col-lg-6 col-md-7 col-12">
                      <motion.div
                        className="testimonial-right-wrap slider-for"
                        variants={contentVariants}
                      >
                          <Slider
                            asNavFor={nav2}
                            ref={(slider1) => setNav1(slider1)}
                            dots={true}
                            arrows={false}
                            fade={true}
                          >
                              {data.testimonials.map((tesmnl, tsm) => (
                                <div className="testimonial-item" key={tsm} style={{ fontFamily: 'Arial' }}>
                                    <motion.div
                                      className="icon"
                                      variants={quoteVariants}
                                    >
                                        <Image src={quote} alt="" />
                                    </motion.div>
                                    <motion.p variants={contentVariants}>{tesmnl.description}</motion.p>
                                    <motion.h3 style={{ fontFamily: 'Arial' }} variants={contentVariants}>{tesmnl.name}</motion.h3>
                                    <motion.span variants={contentVariants}>{tesmnl.position}</motion.span>
                                </div>
                              ))}
                          </Slider>
                      </motion.div>
                  </div>
              </motion.div>
          </div>
      </section>
    );
}

export default Testimonial3;

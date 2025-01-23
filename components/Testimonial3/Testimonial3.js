import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial/1.jpg';
import ts2 from '/public/images/testimonial/2.jpg';
import ts3 from '/public/images/testimonial/3.jpg';
import quote from '/public/images/testimonial/quote-1.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Компания Varro Operating Group демонстрирует высочайший уровень профессионализма в области добычи и переработки нефти и газа. Их подход к устойчивому развитию заслуживает уважения.",
        Title: 'Алексей Иванов',
        Sub: "Генеральный директор, Нефтегазстрой",
    },
    {
        id: '02',
        tImg: ts2,
        Des: "Сотрудничество с Varro Operating Group было исключительно продуктивным. Их инновационные решения помогли нам оптимизировать производственные процессы.",
        Title: 'Мария Петрова',
        Sub: "Руководитель отдела логистики, Газпром",
    },
    {
        id: '03',
        tImg: ts3,
        Des: "Varro Operating Group — это надежный партнер, который всегда выполняет свои обязательства. Их команда профессионалов заслуживает высшей оценки.",
        Title: 'Дмитрий Смирнов',
        Sub: "Технический директор, Лукойл",
    }
];

const Testimonial3 = () => {
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
                              {testimonial.map((tesmnl, tsm) => (
                                <motion.div
                                  className="image"
                                  key={tsm}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.3 }}
                                >
                                    <Image src={tesmnl.tImg} alt="" />
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
                              {testimonial.map((tesmnl, tsm) => (
                                <div className="testimonial-item" key={tsm} style={{ fontFamily: 'Arial' }}>
                                    <motion.div
                                      className="icon"
                                      variants={quoteVariants}
                                    >
                                        <Image src={quote} alt="" />
                                    </motion.div>
                                    <motion.p variants={contentVariants}>{tesmnl.Des}</motion.p>
                                    <motion.h3 style={{ fontFamily: 'Arial' }} variants={contentVariants}>{tesmnl.Title}</motion.h3>
                                    <motion.span  variants={contentVariants}>{tesmnl.Sub}</motion.span>
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

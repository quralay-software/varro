import React from 'react';
import CountUp from 'react-countup';
import Link from 'next/link';
import abimg from '/public/images/img-3.JPG'
import icon from '/public/images/call.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About3 = (props) => {
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
                              <motion.span variants={fadeInUp}>О нас</motion.span>
                              <motion.h2
                                variants={fadeInUp}
                                style={{ fontFamily: 'Arial' }}
                              >
                                  Максимизация ценности ресурсов через устойчивое развитие
                              </motion.h2>
                              <motion.p variants={fadeInUp}>
                                  Компания Varro Operating Group специализируется на добыче и переработке нефти и газа, обеспечивая ответственное управление окружающей средой.
                                  Мы стремимся к инновациям, оптимизации производственных процессов и устойчивому развитию, чтобы максимизировать ценность наших ресурсов.
                              </motion.p>
                          </motion.div>
                          <motion.div className="left-btn" variants={fadeInUp}>
                              <Link onClick={ClickHandler} href="/about" className="theme-btn">Узнать больше</Link>
                              <Link onClick={ClickHandler} className="call" href="/contact">
                                  <div className="icon">
                                      <Image src={icon} alt="" />
                                  </div>
                                  <div className="text">
                                      <h5>Позвоните нам:</h5>
                                      <span>+7 7292 201 909</span>
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
                                  <h3><CountUp end={25} enableScrollSpy />+</h3>
                                  <p>Лет опыта в нефтегазовой отрасли</p>
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

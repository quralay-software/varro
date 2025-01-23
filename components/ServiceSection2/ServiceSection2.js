import React from 'react';
import Link from 'next/link';
import Services from '../../api/Services';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ServiceSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
      <section className="Arkitek-service-section-s2 section-padding">
          <div className="container">
              <motion.div
                className="row justify-content-center"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="col-lg-6 col-12">
                      <div className="wpo-section-title" style={{ fontFamily: 'Arial' }}>
                          <motion.span variants={titleVariants}>НАШИ УСЛУГИ</motion.span>
                          <motion.h2  style={{ fontFamily: 'Arial' }} variants={titleVariants}>Что мы предлагаем</motion.h2>
                      </div>
                  </div>
              </motion.div>
              <div className="service-wrap">
                  <motion.div
                    className="row align-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                      {Services.map((service, Sitem) => (
                        <motion.div
                          className="col-lg-4 col-md-6 col-12"
                          key={Sitem}
                          variants={itemVariants}
                        >
                            <div className="service-item" style={{ fontFamily: 'Arial' }}>
                                <motion.div
                                  className="icon"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.2 }}
                                >
                                    <Image src={service.scImg} alt=""/>
                                </motion.div>
                                <div className="text">
                                    <h2>
                                        <Link  style={{ fontFamily: 'Arial' }} onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>
                                            {service.sTitle}
                                        </Link>
                                    </h2>
                                    <p>{service.des2}</p>
                                </div>
                            </div>
                        </motion.div>
                      ))}
                  </motion.div>
              </div>
          </div>
      </section>
    )
}

export default ServiceSection2;

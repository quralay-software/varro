import React from 'react';
import Projects from '../../api/Projects';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectSectionS2 = (props) => {
    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
      <section className={`Arkitek-project-section-s2 ${props.prClass}`}>
          <div className="container-fluid">
              <motion.div
                className="row justify-content-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                  <div className="col-lg-6 col-12" style={{ fontFamily: 'Arial' }}>
                      <SectionTitle subTitle={'НАШИ ПРОЕКТЫ'} Title={'Последние проекты'} />
                  </div>
              </motion.div>
              <motion.div
                className="project-wrap"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                  <div className="project-slider owl-carousel">
                      <Slider {...settings}>
                          {Projects.slice(0, 4).map((project, prj) => (
                            <motion.div
                              className="project-item"
                              key={prj}
                              variants={itemVariants}
                            >
                                <motion.div
                                  className="image"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.3 }}
                                >
                                    <Image src={project.pImg} alt="" />
                                </motion.div>
                                <motion.div
                                  className="text"
                                  style={{ fontFamily: 'Arial' }}
                                >
                                    <h2>
                                        <Link
                                          style={{ fontFamily: 'Arial' }}
                                          onClick={ClickHandler} href={'/project/[slug]'} as={`/project/${project.slug}`}>
                                            {project.pTitle}
                                        </Link>
                                    </h2>
                                </motion.div>
                            </motion.div>
                          ))}
                      </Slider>
                  </div>
              </motion.div>
          </div>
      </section>
    )
}

export default ProjectSectionS2;

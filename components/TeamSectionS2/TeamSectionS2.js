import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle/SectionTitle';
import Teams from '../../api/Teams';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { motion } from 'framer-motion';

const TeamSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: true,
        loop: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const imageHover = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    const socialVariants = {
        rest: { opacity: 0, y: 10 },
        hover: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
      <section className="Arkitek-team-section section-padding">
          <div className="container-fulid">
              <motion.div
                className="row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                  <div className="col-lg-6" style={{ fontFamily: 'Arial' }}>
                      <SectionTitle subTitle={'НАША КОМАНДА'} Title={'Познакомьтесь с нашими профессионалами'} />
                  </div>
              </motion.div>
              <motion.div
                className="team-slider"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                  <Slider {...settings}>
                      {Teams.map((team, titem) => (
                        <motion.div
                          className="item"
                          key={titem}
                          variants={itemVariants}
                          initial="rest"
                          whileHover="hover"
                        >
                            <motion.div
                              className="image"
                              variants={imageHover}
                            >
                                <Image src={team.tImg} alt="" />
                            </motion.div>
                            <motion.div
                              className="text"
                              style={{ fontFamily: 'Arial' }}
                            >
                                <h2>
                                    <Link
                                      style={{ fontFamily: 'Arial', fontSize: '18px' }}
                                      onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                        {team.name}
                                    </Link>
                                </h2>
                                <span style={{ fontFamily: 'Arial', fontSize: '12px' }}>{team.title}</span>
                                <motion.ul
                                  className="icon"
                                  variants={socialVariants}
                                  style={{ paddingRight: '20px', position: 'absolute', left: 0 }}
                                >

                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>

                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                      ))}
                  </Slider>
              </motion.div>
          </div>
      </section>
    );
};

export default TeamSectionS2;

import React from 'react';
import CountUp from 'react-countup';
import shape from '/public/images/fun-fact.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FunFact = (props) => {
    const funFact = [
        {
            title: '49',
            subTitle: 'площадь месторождения (км²)',
            Symbol: '',
        },
        {
            title: '3.6',
            subTitle: 'проектная мощность завода (млрд м³/год)',
            Symbol: '',
        },
        {
            title: '25',
            subTitle: 'лет контракта на добычу',
            Symbol: '+',
        },
        {
            title: '2007',
            subTitle: 'год завершения | этапа строительства',
            Symbol: '',
        },
    ];

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
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const shapeVariants = {
        hidden: { opacity: 0, rotate: -10 },
        visible: {
            opacity: 0.15,
            rotate: 0,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    return (
      <section className={`wpo-fun-fact-section ${props.fClass}`}>
          <div className="container">
              <div className="row">
                  <div className="col col-xs-12">
                      <motion.div
                        className="wpo-fun-fact-grids clearfix"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                          {funFact.map((funfact, fitem) => (
                            <motion.div
                              className="grid"
                              key={fitem}
                              variants={itemVariants}
                            >
                                <div className="info" style={{ fontFamily: 'Arial' }}>
                                    <h3>
                                            <span>
                                                <CountUp
                                                  end={funfact.title}
                                                  enableScrollSpy
                                                  duration={2}
                                                />
                                            </span>
                                        {funfact.Symbol}
                                    </h3>
                                    <p className="funfact-subtitle" style={{ fontFamily: 'Arial', fontSize: '12px', fontStyle: 'bold' }}>{funfact.subTitle}</p>
                                </div>
                            </motion.div>
                          ))}
                          <motion.div
                            className="bg-shape"
                            variants={shapeVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                              <Image src={shape} alt=""/>
                          </motion.div>
                      </motion.div>
                  </div>
              </div>
          </div>
          <span id="counter" className='d-none' />
      </section>
    )
}

export default FunFact;

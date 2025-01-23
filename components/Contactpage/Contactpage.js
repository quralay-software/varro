import React from 'react';
import ContactForm from '../ContactFrom';
import { motion } from 'framer-motion';

const Contactpage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
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

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
      <section className="wpo-contact-pg-section section-padding">
          <div className="container">
              <div className="row">
                  <div className="col col-lg-10 offset-lg-1">
                      <motion.div
                        className="office-info"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                          <div className="row">
                              {[
                                  {
                                      icon: "fi flaticon-placeholder",
                                      title: "Адрес",
                                      content: ["Республика Казахстан, Мангистауская область, город Актау, БЦ Зодиак, микрорайон 17, здание 39."]
                                  },
                                  {
                                      icon: "fi flaticon-email",
                                      title: "Напишите нам",
                                      content: ["info@varro.kz", "support@varro.kz"]
                                  },
                                  {
                                      icon: "fi flaticon-phone-call",
                                      title: "Позвоните нам",
                                      content: ["+7 7292 201 909", "+7 7292 201 910"]
                                  }
                              ].map((item, index) => (
                                <motion.div
                                  className="col col-xl-4 col-lg-6 col-md-6 col-12"
                                  key={index}
                                  variants={itemVariants}
                                >
                                    <motion.div
                                      className="office-info-item"
                                      whileHover={{ y: -5 }}
                                      transition={{ duration: 0.3 }}
                                      style={{ fontFamily: 'Arial' }}
                                    >
                                        <div className="office-info-icon">
                                            <motion.div
                                              className="icon"
                                              variants={iconVariants}
                                            >
                                                <i className={item.icon}></i>
                                            </motion.div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2  style={{ fontFamily: 'Arial' }}>{item.title}</h2>
                                            {item.content.map((text, i) => (
                                              <p key={i}>{text}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                              ))}
                          </div>
                      </motion.div>
                      <motion.div
                        className="wpo-contact-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ fontFamily: 'Arial' }}
                      >
                          <h2  style={{ fontFamily: 'Arial' }}>Есть вопросы?</h2>
                          <p>Свяжитесь с нами, чтобы получить дополнительную информацию или обсудить ваш проект.</p>
                      </motion.div>
                      <motion.div
                        className="wpo-contact-form-area"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                      >
                          <ContactForm />
                      </motion.div>
                  </div>
              </div>
          </div>
          <motion.section
            className="wpo-contact-map-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
              <div className="wpo-contact-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
              </div>
          </motion.section>
      </section>
    );
};

export default Contactpage;

import React from 'react';
import blogs from '../../api/blogs';
import SectionTitle from '../SectionTitle/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

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

    return (
      <section className="wpo-blog-section section-padding">
          <div className="container">
              <motion.div
                className="row justify-content-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                  <div className="col-lg-6 col-12" style={{ fontFamily: 'Arial' }}>
                      <SectionTitle subTitle={'Наш блог'} Title={'Читайте наши последние новости'} />
                  </div>
              </motion.div>
              <div className="blog-wrap">
                  <div className="row">
                      <div className="col-lg-12">
                          <motion.div
                            className="gallery-container clearfix"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                              {blogs.map((blog, Bitem) => (
                                <motion.div
                                  className="grid"
                                  key={Bitem}
                                  variants={itemVariants}
                                >
                                    <motion.div
                                      className={`blog-item ${blog.sClass}`}
                                      whileHover={{ y: -5 }}
                                      transition={{ duration: 0.3 }}
                                      style={{ fontFamily: 'Arial' }}
                                    >
                                        <motion.div
                                          className="image"
                                          whileHover={{ scale: 1.03 }}
                                          transition={{ duration: 0.3 }}
                                        >
                                            <Image src={blog.screens} alt="" />
                                        </motion.div>
                                        <div className="blog-content">
                                            <div className="thumb">
                                                <ul>
                                                    <li><Link
                                                      style={{ fontFamily: 'Arial' }}
                                                      onClick={ClickHandler}
                                                      href={'/blog-single/[slug]'}
                                                      as={`/blog-single/${blog.slug}`}>{blog.author}
                                                    </Link></li>
                                                    <li>{blog.create_at}</li>
                                                </ul>
                                            </div>
                                            <h2><Link
                                              style={{ fontFamily: 'Arial' }}
                                              onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                            <p>{blog.description}</p>
                                            <motion.div
                                              whileHover={{ x: 5 }}
                                              transition={{ duration: 0.3 }}
                                            >
                                                <Link onClick={ClickHandler} className="theme-btn-s2" href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>Читать далее</Link>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                              ))}
                          </motion.div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default BlogSection2;

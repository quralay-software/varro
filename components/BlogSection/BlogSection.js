import React from 'react'
import blogs from '../../api/blogs'
import SectionTitle from '../SectionTitle/SectionTitle'
import Link from 'next/link'
import Image from 'next/image'

const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-blog-section-s2 section-padding" id="gallery">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={'Our Blog'} Title={'Read Our Latest News'} />
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery-container clearfix">
                                {blogs.map((blog, Bitem) => (
                                    <div className="grid" key={Bitem}>
                                        <div className={`blog-item ${blog.sClass}`}>
                                            <div className="image">
                                                <Image src={blog.screens} alt="" />
                                            </div>
                                            <div className="blog-content">
                                                <div className="thumb">
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                                        <li>{blog.create_at}</li>
                                                    </ul>
                                                </div>
                                                <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                                <p>Varius arcu elementum orci ornare feugiat aliqet tincidunt. Naetur
                                                    faucibus
                                                    molestie sollicitudin vestibulum.</p>
                                                <Link onClick={ClickHandler} className="theme-btn-s2" href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="grid">
                                    <div className="blog-item s2">
                                        <Link onClick={ClickHandler} href="/blog" className="blog-item-btn">All Blog Post <i className="ti-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;
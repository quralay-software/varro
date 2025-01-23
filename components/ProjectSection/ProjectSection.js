import React from 'react'
import Projects from '../../api/Projects'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import Image from 'next/image'

const ProjectSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    
    return (
        <section className="Arkitek-project-section-s3 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="project-text">
                            <span>Featured Works</span>
                            <h2>Architecture is about experience,<br/> not only visual</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href="/project-single" className="theme-btn">Discover More</Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-grids gallery-container clearfix">
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        {Projects.slice(0, 4).map((project, i) => (
                                            <div className="grid" key={i}>
                                                <div className="img-holder">
                                                    <Image src={project.pImg} alt="" />
                                                    <div className="hover-content">
                                                        <h2><Link onClick={ClickHandler} href={'/project/[slug]'} as={`/project/${project.slug}`}><i className="ti-plus"></i></Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Masonry>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;
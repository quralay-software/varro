import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Hero3 from '../../components/hero3/hero3';
import About3 from '../../components/about3/about3';
import FunFact from '../../components/FunFact';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Testimonial3 from '../../components/Testimonial3/Testimonial3';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import Footer from '../../components/footer/Footer';
import ServiceSection from "../../components/ServiceSection/ServiceSection";

export const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} topbarNone={'topbar-none'} />
            <Hero3 />
            <About3 />
            <FunFact />
            <ServiceSection />
            <ProjectSectionS2 />
            <TeamSectionS2 />
            <Testimonial3 />
            <CtaSection />
            <BlogSection2 />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};

import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import FunFact from '../components/FunFact';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import Hero3 from "../components/hero3/hero3";
import About3 from "../components/about3/about3";
import ProjectSectionS2 from "../components/ProjectSectionS2/ProjectSectionS2";
import Testimonial3 from "../components/Testimonial3/Testimonial3";
import CtaSection from "../components/CtaSection/CtaSection";
import Footer from "../components/footer/Footer";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = () => {
    return (
        <Fragment>
          <Navbar hclass={'wpo-header-style-3'} topbarNone={'topbar-none'} />
          <Hero3 />
          {/* <About3 /> */}
          {/* <FunFact /> */}
          <ServiceSection />
          {/* <ProjectSectionS2 /> */}
          {/* <Testimonial3 /> */}
          {/* <CtaSection /> */}
          <Footer/>
          <Scrollbar />
        </Fragment>
    )
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}

export default HomePage;

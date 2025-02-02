import React, { Fragment } from 'react';
import About4 from '../../components/about4/about4';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import FunFact from '../../components/FunFact';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import CtaSection2 from '../../components/CtaSection2/CtaSection2';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CtaSection from "../../components/CtaSection/CtaSection";

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <About4 abClass={'section-padding'}/>
            <FunFact />
{/*
            <ProjectSectionS2 prClass={'section-padding'}/>
*/}
            <CtaSection />
            <Footer />
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

export default AboutPage;

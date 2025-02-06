import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import Hero3 from "../components/hero3/hero3";
import Footer from "../components/footer/Footer";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = () => {
    return (
        <Fragment>
          <Navbar hclass={'wpo-header-style-3'} topbarNone={'topbar-none'} />
          <Hero3 />
          <ServiceSection />
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

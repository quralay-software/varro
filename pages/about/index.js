import React, { Fragment } from 'react';
import About4 from '../../components/about4/about4';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <About4 abClass={'section-padding'}/>
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

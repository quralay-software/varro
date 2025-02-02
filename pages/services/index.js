import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import ServicesHero from '../../components/services/ServicesHero';
import ServicesGrid from '../../components/services/ServicesGrid';
import ServicesBenefits from '../../components/services/ServicesBenefits';
import ServicesProcess from '../../components/services/ServicesProcess';
import ServicesCases from '../../components/services/ServicesCases';
import ServicesContact from '../../components/services/ServicesContact';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const ServicesPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <ServicesHero />
            <ServicesGrid />
            <ServicesBenefits />
            <ServicesProcess />
{/*
            <ServicesCases />
*/}
            <ServicesContact />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default ServicesPage;

import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import ActivitiesOverview from '../../components/activities/ActivitiesOverview';
import ActivitiesMain from '../../components/activities/ActivitiesMain';
import TechInnovation from '../../components/activities/TechInnovation';
import Environmental from '../../components/activities/Environmental';
import SocialPolicy from '../../components/activities/SocialPolicy';
import FuturePlans from '../../components/activities/FuturePlans';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const ActivitiesPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle 
                pageTitle={'Деятельность компании'} 
                pagesub={'Основные направления'} 
            />
            <ActivitiesOverview />
            <ActivitiesMain />
            <TechInnovation />
            <Environmental />
            <SocialPolicy />
            <FuturePlans />
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

export default ActivitiesPage;

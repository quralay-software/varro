import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import PrinciplesHero from '../../components/principles/PrinciplesHero';
import CorePrinciples from '../../components/principles/CorePrinciples';
import PrinciplesInAction from '../../components/principles/PrinciplesInAction';
import PrinciplesStats from '../../components/principles/PrinciplesStats';
import PrinciplesCTA from '../../components/principles/PrinciplesCTA';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const PrinciplesPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PrinciplesHero />
            <CorePrinciples />
            {/*<PrinciplesInAction />
            <PrinciplesStats />
            <PrinciplesCTA />*/}
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

export default PrinciplesPage;

import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import GoalsHero from '../../components/goals/GoalsHero';
import StrategicDirections from '../../components/goals/StrategicDirections';
import GoalsRoadmap from '../../components/goals/GoalsRoadmap';
import SustainableDevelopment from '../../components/goals/SustainableDevelopment';
import GoalsPartners from '../../components/goals/GoalsPartners';
import GoalsCTA from '../../components/goals/GoalsCTA';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const GoalsPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <GoalsHero />
            <StrategicDirections />
            <GoalsRoadmap />
            <SustainableDevelopment />
            {/*<GoalsPartners />
            <GoalsCTA />*/}
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

export default GoalsPage;

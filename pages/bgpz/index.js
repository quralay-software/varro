import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import BgpzHero from '../../components/bgpz/BgpzHero';
import BgpzHistory from '../../components/bgpz/BgpzHistory';
import BgpzTechnology from '../../components/bgpz/BgpzTechnology';
import BgpzEnvironment from '../../components/bgpz/BgpzEnvironment';
import BgpzFuture from '../../components/bgpz/BgpzFuture';
import BgpzContacts from '../../components/bgpz/BgpzContacts';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const BgpzPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle 
                pageTitle={'Боранкольский ГПЗ'} 
                pagesub={'Высокие технологии переработки газа'} 
            />
            <BgpzHero />
            <BgpzHistory />
            <BgpzTechnology />
            <BgpzEnvironment />
            <BgpzFuture />
            <BgpzContacts />
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

export default BgpzPage;

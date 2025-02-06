import React, { Fragment } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '../../components/Navbar/Navbar';
import BgpzHero from '../../components/bgpz/BgpzHero';
import BgpzHistory from '../../components/bgpz/BgpzHistory';
import BgpzTechnology from '../../components/bgpz/BgpzTechnology';
import BgpzEnvironment from '../../components/bgpz/BgpzEnvironment';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const BgpzPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <BgpzHero />
            <BgpzHistory />
            <BgpzTechnology />
            <BgpzEnvironment />
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

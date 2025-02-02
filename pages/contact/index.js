import React from 'react';
import Contactpage from '../../components/Contactpage/Contactpage';
import ContactHero from '../../components/Contactpage/ContactHero';
import Footer from '../../components/footer/Footer';
import Navbar from "../../components/Navbar/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ContactPage = () => {
    return (
        <>
            <Navbar hclass={'wpo-header-style-2'} />
            <ContactHero />
            <Contactpage />
            <Footer />
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default ContactPage;

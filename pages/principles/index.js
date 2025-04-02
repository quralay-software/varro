import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../../components/Navbar/Navbar";
import PrinciplesHero from "../../components/principles/PrinciplesHero";
import CorePrinciples from "../../components/principles/CorePrinciples";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "next-i18next";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const PrinciplesPage = () => {
      const { t } = useTranslation("common");

  return (
    <div className={`flex flex-col min-h-screen ${play.className}`}>
      <Head>
        <title>
          {t("principles.title")} | {t("principles.company")}
        </title>
        <meta name="description" content={t("principles.description")} />
      </Head>
      <Navbar hclass={"wpo-header-style-2"} />
      <PrinciplesHero />
      <CorePrinciples />
      <Footer />
      <Scrollbar />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default PrinciplesPage;

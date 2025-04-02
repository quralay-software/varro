import React, { Fragment } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../../components/Navbar/Navbar";
import GoalsHero from "../../components/goals/GoalsHero";
import StrategicDirections from "../../components/goals/StrategicDirections";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const GoalsPage = () => {
        const { t } = useTranslation("common");

  return (
    <div className={`flex flex-col min-h-screen ${play.className}`}>
      <Head>
        <title>
          {t("goals.title")} | {t("goals.company")}
        </title>
        <meta name="description" content={t("goals.description")} />
      </Head>
      <Navbar hclass={"wpo-header-style-2"} />
      <GoalsHero />
      <StrategicDirections />
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

export default GoalsPage;

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero3 from "../components/hero3/hero3";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const HomePage = () => {
    const { t } = useTranslation("common");

  return (
    <div className={`${play.className}`}>
      <Head>
        <title>
          {t("main.title")} | {t("main.company")}
        </title>
        <meta name="description" content={t("main.description")} />
      </Head>
      <Navbar hclass={"wpo-header-style-3"} topbarNone={"topbar-none"} />
      <Hero3 />
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

export default HomePage;

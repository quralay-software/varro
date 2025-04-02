import React from "react";
import Head from "next/head";
import About4 from "../../components/about4/about4";
import Navbar from "../../components/Navbar/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage = () => {
  const { t } = useTranslation("common");

  return (
    <div className={`${play.className}`}>
      <Head>
        <title>
          {t("about.title")} | {t("about.company")}
        </title>
        <meta
          name="description"
          content={t(
            "about.description",
          )}
        />
      </Head>
      <Navbar hclass={"wpo-header-style-2"} />
      <About4 />
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

export default AboutPage;

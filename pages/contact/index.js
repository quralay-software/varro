import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import Contactpage from "../../components/Contactpage/Contactpage";
import Navbar from "../../components/Navbar/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const ContactPage = () => {
  const { t } = useTranslation("common");

  return (
    <div className={` ${play.className}`}>
      <Head>
        <title>
          {t("contacts.title")} | {t("contacts.company")}
        </title>
        <meta name="description" content={t("contacts.description")} />
      </Head>
      <Navbar hclass={"wpo-header-style-2"} />
      <Contactpage />
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

export default ContactPage;

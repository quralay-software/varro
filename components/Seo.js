import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { seoSchemas } from "./seoSchemas";

const Seo = ({ title, description, image = "/images/img6.webp" }) => {
  const { locale, asPath } = useRouter();
  const { t } = useTranslation("common");

  const slug = asPath.split("/").filter(Boolean).pop() || "main";

  const pageTitle = title || `${t(`${slug}.title`)} | ${t(`${slug}.company`)}`;
  const pageDescription = description || t(`${slug}.description`);
  const url = `https://varro.kz${asPath}`;

  const autoSchema = seoSchemas[slug] || seoSchemas["main"];

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      <link rel="canonical" href={url} />

      <link
        rel="alternate"
        hrefLang="kk"
        href={`https://varro.kz/kk${asPath}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://varro.kz/en${asPath}`}
      />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      {autoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoSchema) }}
        />
      )}
    </Head>
  );
};

export default Seo;

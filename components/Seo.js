import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { seoSchemas } from "./seoSchemas";

const Seo = ({ title, description, image = "/images/img6.webp" }) => {
  const { locale, asPath } = useRouter();
  const { t } = useTranslation("common");

  const path = asPath.replace(/^\/(en|kk)/, "") || "/";
  const base = "https://varro.kz";

  const slug = path.split("/").filter(Boolean).pop() || "main";
  const pageTitle = title || `${t(`${slug}.title`)} | ${t(`${slug}.company`)}`;
  const pageDesc = description || t(`${slug}.description`);
  const canonicalHref =
    locale === "ru" ? `${base}${path}` : `${base}/${locale}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />

      <link rel="canonical" href={canonicalHref} />

      {["ru", "en", "kk"].map((lng) => {
        const href = lng === "ru" ? `${base}${path}` : `${base}/${lng}${path}`;
        return <link key={lng} rel="alternate" hrefLang={lng} href={href} />;
      })}

      <link rel="alternate" hrefLang="x-default" href={`${base}${path}`} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalHref} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={image} />

      {seoSchemas[slug] && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoSchemas[slug]),
          }}
        />
      )}
    </Head>
  );
};

export default Seo;

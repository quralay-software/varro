// scripts/generate-sitemap.js

import fs from "fs";
import { globby } from "globby";
import prettier from "prettier";

// Если у вас реально используются три языка с разными папками, оставьте это.
// Если же у вас встроенный i18n (Next.js), возьмите локали из next.config.js или настройте вручную.
const LOCALES = ["en", "ru", "kk"];

// Ваш домен
const DOMAIN = "https://varro.kz";

async function generateSitemap() {
  try {
    // Ищем все .js, .jsx, .ts, .tsx в папке pages,
    // исключаем специальные файлы и api/ директорию
    const pageFiles = await globby([
      "pages/**/*.{js,jsx,ts,tsx}",
      "!pages/_*.{js,jsx,ts,tsx}",
      "!pages/api",
      "!pages/api/**",
      // Если есть динамические маршруты ([slug].js), решите, нужно ли их включать:
      // '!pages/**/[*]*.js' // <- пример, как исключить динамические
    ]);

    // Преобразуем пути файлов в URL-маршруты
    const routes = pageFiles.map((file) => {
      // Убираем 'pages/' в начале
      let route = file.replace(/^pages\//, "");

      // Убираем расширение файла
      route = route.replace(/\.(js|jsx|ts|tsx)$/, "");

      // Если файл называется /index (например, pages/about/index.js) – превращаем в /about
      // Если это просто pages/index.js – будет /
      if (route === "index") {
        route = "";
      } else if (route.endsWith("/index")) {
        route = route.replace(/\/index$/, "");
      }

      // Добавляем слэш в начало
      return `/${route}`;
    });

    // На случай, если дублируются пути
    const uniqueRoutes = [...new Set(routes)];

    // Формируем записи для sitemap, учитывая локали
    const sitemapEntries = [];

    for (const locale of LOCALES) {
      for (const route of uniqueRoutes) {
        // Пропустим 404, _error и т. п., если вдруг попали
        if (route.includes("404") || route.includes("_error")) continue;

        const url = `${DOMAIN}/${locale}${route}`;
        sitemapEntries.push({
          url,
          lastmod: new Date().toISOString(),
          changefreq: "weekly",
          // Можно варьировать priority в зависимости от важности
          priority: route === "/" ? "1.0" : "0.8",
        });
      }
    }

    // Генерируем XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>
`
  )
  .join("")}
</urlset>`;

    // Форматируем с помощью Prettier (parser: 'html')
    const formatted = await prettier.format(sitemapXml, { parser: "html" });

    // Записываем результат в public/sitemap.xml
    fs.writeFileSync("public/sitemap.xml", formatted, "utf8");
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();

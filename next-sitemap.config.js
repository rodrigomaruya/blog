/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://curiosidade-sem-limites.vercel.app", // URL do seu site
  generateRobotsTxt: true, // Gera automaticamente o robots.txt
  sitemapSize: 5000, // Divide sitemaps se houver mais de 5000 URLs
  generateIndexSitemap: true, // Garante a criação do sitemapindex.xml
};

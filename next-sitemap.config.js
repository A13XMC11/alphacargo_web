/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://alphacargo-ec.com",
  generateRobotsTxt: false,
  outDir: "public",
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/nosotros"),
    await config.transform(config, "/servicios"),
    await config.transform(config, "/importacion"),
    await config.transform(config, "/blog"),
    await config.transform(config, "/contacto"),
    await config.transform(config, "/faq"),
    await config.transform(config, "/trabaja-con-nosotros"),
  ],
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/servicios": 0.9,
      "/importacion": 0.9,
      "/contacto": 0.8,
      "/nosotros": 0.7,
      "/blog": 0.8,
      "/faq": 0.7,
      "/trabaja-con-nosotros": 0.5,
      "/privacidad": 0.3,
      "/terminos": 0.3,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

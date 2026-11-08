// next.config.mjs
const repo = 'wow-forever-randomizer';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',                 // генерировать статический сайт
  basePath: `/${repo}`,             // префикс пути для GitHub Pages
  assetPrefix: `/${repo}/`,         // префикс для статики
  images: { unoptimized: true },    // без server-side оптимизации
  trailingSlash: true,
};

// next.config.mjs
const repo = 'twow-classic-randomizer';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',                 // генерировать статический сайт
  basePath: `/${repo}`,             // префикс пути для GitHub Pages
  assetPrefix: `/${repo}/`,         // префикс для статики
  images: { unoptimized: true },    // без server-side оптимизации
  trailingSlash: true,
};

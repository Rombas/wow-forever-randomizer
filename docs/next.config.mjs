const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',                  // static export
  basePath: '/twow-classic-randomizer',
  assetPrefix: '/twow-classic-randomizer/',
  images: { unoptimized: true },     // для GitHub Pages
};

const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',                  // static export
  basePath: '/wow-forever-randomizer',
  assetPrefix: '/wow-forever-randomizer/',
  images: { unoptimized: true },     // для GitHub Pages
};

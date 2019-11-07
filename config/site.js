module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Sharkey-Chefs', // Navigation and Site Title
  titleAlt: 'Sharkey-Chefs recipes', // Title for JSONLD
  description: 'Easy tasty recipes with food restrictions in mind',
  url: 'https://sharkey-chefs.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://sharkey-chefs.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'SharkeyChef', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Nick Tchemitcheff', // Author for schemaORGJSONLD
  themeColor: '#A9F0D1',
  backgroundColor: '#f0f0f0',
  twitter: '@nicktchemi',
};

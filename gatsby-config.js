module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Nik Gospodinov is a full stack web developer who uses mainly React and JavaScript.`,
    author: `Nik Gospodinov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://portfolio-nik.netlify.app/',
        sitemap: 'https://portfolio-nik.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1F2933`,
        theme_color: `#1F2933`,
        display: `minimal-ui`,
        icon: `src/images/nik-logo-minimal.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

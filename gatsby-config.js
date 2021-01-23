/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: `ZellyPish`,
    siteTitleAlt: `ZellyPish`,
    author: `ZellyPish`,
    siteHeadline: `ZellyPish Dev Blog`,
    siteUrl: `https://zellypish.dev/`,
    siteDescription: `JavaScript, Web Develop`,
    siteLanguage: `KR`,
    siteImage: `/logo.png`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZellyPish Dev Blog`,
        short_name: `zellypish-blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#8668ed`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-4R3W1H1M6J",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#937fd8",
        // Height of the scroll indicator
        height: "5px",
        // Configure paths where the scroll indicator will appear
        paths: ["/**"],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
  ],
}
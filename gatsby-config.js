/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby tailwindcss starter plus`,
    description: `Gatsby and Tailwindcss starter with additional features such as Typescript,Jest and Preact`,
    author: {
      name: "Hamzah Syed",
      email: "hamzah.syed17@gmail.com",
    },
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    // Gatsby Image
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Preact
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwindcss-starter-plus`,
        short_name: `gatswind`,
        start_url: `/`,
        background_color: theme.colors.white,
        theme_color: "1491e5",
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        // ignore: [
        //   "/node_modules/slick-carousel/slick/slick.css",
        //   "/node_modules/slick-carousel/slick/slick-theme.css",
        // ],
      },
    },
  ],
}

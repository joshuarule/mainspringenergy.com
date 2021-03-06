module.exports = {
  siteMetadata: {
    title: `Mainspringenergy.com`,
    description: `Mainspring Energy`,
    author: `@joshuarule`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `./src/assets/json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        tailwind: true,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: true,
        replaceAttrValues: {
          '#000000': 'currentColor',
          '#000': 'currentColor',
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `m8z36hin`,
        dataset: process.env.SANITY_STUDIO_API_DATASET || 'staging',
        token: process.env.SANITY_TOKEN,
        watchMode: process.env.NODE_ENV === 'development' ? true : false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'YUA-156078314-1',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mainspringenergy.com`,
        short_name: `mainspring`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: 'src/assets/images/favicon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

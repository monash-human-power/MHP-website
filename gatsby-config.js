module.exports = {
  siteMetadata: {
    title: `Monash Human Power`,
    shortTitle: `MHP`,
    description: `Learn about Monash Human Power and its human powered vehicles`,
    author: `Monash Human Power`,
    siteUrl: `https://monashhumanpower.org`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with MHP Tracking ID
        trackingId: "UA-172946597-1",
      },
    },
    {
      // Heap analytics is similar to google analytics, but can give click by click user activity
      resolve: "gatsby-plugin-heap",
      options: {
        appId: "1394991606",
        enableOnDevMode: true, // if 'false', heap will be fired on NODE_ENV=production only
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      // Images folder
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // Markdown folder
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      // Blog folder
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Monash Human Power`,
        short_name: `MHP`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        // Icon to be used browser tabs
        icon: `src/images/MHP_logo_green_black.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 0,
      },
    },
    `gatsby-plugin-styled-components`, // For CSS-in-CSS
    `gatsby-plugin-netlify-cms`, // For Netlify headless CMS

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

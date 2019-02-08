module.exports = {
  siteMetadata: {
    title: `New Tech Engineering`,
    description: `New Tech Engineering, established in the year 1996 by the most promising leaders of the group, in order to manufacture quality packaging/packing machines, with strict quality control. The growth of
    the packing industry is far behind the overall economic growth where came the need of a custom built packaging machines to improve upon the
    prevailing packing standards. 
    We are equipped with strong R&D and strict quality control measures and ready to take any challenge. The company has well qualified
    enthusiastic sales & service team to take care of customer's requirement.
    Manufacturers & exporters of Pouch Packing Machines, Pouch Packaging Machines, Form Fill & Seal machines, Powder Packing & Liquid filling machines, fully pneumatic collar type, semi-pneumatic collar type, sugar type, Packing of Free flowing & Non-sticky course in India.`,
    author: `@newtechengineering`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

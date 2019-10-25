const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: `gatsby-source-wpgraphql`,
      options: {
        url: `http://wpgraphql.local`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

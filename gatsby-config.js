module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-antd',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`
        ]
      } 
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet'
  ]
}
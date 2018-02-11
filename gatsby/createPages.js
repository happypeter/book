const path = require(`path`)

module.exports = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  allMarkdown.data.allMarkdownRemark.edges.map(({ node }) => {
    const { slug } = node.fields
    const pid = Number(slug.split('/')[2])
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/book-post.js`),
      context: {
        slug,
        pid
      }
    })
  })
}

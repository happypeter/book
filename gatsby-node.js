const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
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
    `
    ).then(result => {
      const { edges: posts } = result.data.allMarkdownRemark
      posts.map(({ node }) => {
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
      resolve()
    })
  })
}
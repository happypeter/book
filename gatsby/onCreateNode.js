const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `TocJson`) {
    const fullPath = createFilePath({ node, getNode })

    const bookId = fullPath.split('/')[1]

    createNodeField({
      node,
      name: `bookId`,
      value: bookId
    })
  }
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

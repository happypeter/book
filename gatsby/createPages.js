const path = require(`path`)

module.exports = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const allToc = await graphql(`
    {
      allTocJson {
        edges {
          node {
            fields {
              bookId
            }
          }
        }
      }
    }
  `)

  allToc.data.allTocJson.edges.map(({ node }) => {
    const { bookId } = node.fields
    createPage({
      path: bookId,
      component: path.resolve(`./src/templates/book.js`),
      context: {
        bookId
      }
    })
  })

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              episode
            }
          }
        }
      }
    }
  `)

  allMarkdown.data.allMarkdownRemark.edges.map(({ node }) => {
    const { episode } = node.fields
    const bookId = episode.split('/')[1]
    createPage({
      path: episode,
      component: path.resolve(`./src/templates/episode.js`),
      context: {
        episode,
        bookId
      }
    })
  })
}

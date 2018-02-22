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
              episodePath
            }
          }
        }
      }
    }
  `)

  allMarkdown.data.allMarkdownRemark.edges.map(({ node }) => {
    const { episodePath } = node.fields
    const bookId = episodePath.split('/')[1]
    const episodeId = episodePath.split('/')[2]
    createPage({
      path: episodePath,
      component: path.resolve(`./src/templates/episode.js`),
      context: {
        episodeId,
        bookId,
        episodePath
      }
    })
  })
}

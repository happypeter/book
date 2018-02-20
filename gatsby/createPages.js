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
    console.log('createPages.js--------', bookId)
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
    console.log('slug.....', slug)
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/episode.js`),
      context: {
        slug,
        pid
      }
    })
  })
}
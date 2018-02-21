import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default ({ data, pathContext }) => {
  const { episode, bookId } = pathContext
  const episodeId = episode.split('/')[2]
  console.log('data====', data)
  const toc = data.allTocJson.edges.map(t => t.node.episodeId)
  console.log('pathContext====', pathContext)
  const ep = data.markdownRemark
  return (
    <div>
      <Header bookId={bookId} />
      <Sidebar toc={toc} episodeId={episodeId} />
      <div dangerouslySetInnerHTML={{ __html: ep.html }} />
    </div>
  )
}

export const query = graphql`
  query PageQuery($episode: String!, $bookId: String!) {
    markdownRemark(fields: { episode: { eq: $episode } }) {
      html
    }
    allTocJson(filter: { fields: { bookId: { eq: $bookId } } }) {
      edges {
        node {
          episodeId
        }
      }
    }
  }
`

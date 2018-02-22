import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

export default ({ data, pathContext }) => {
  const { episodeId, bookId } = pathContext
  const episodes = data.allTocJson.edges.map(t => t.node)
  const episode = episodes.find(t => t.episodeId === episodeId)
  const ep = data.markdownRemark
  return (
    <div>
      <Header bookId={bookId} />
      <Sidebar episodes={episodes} episodeId={episodeId} bookId={bookId} />
      <Title>{episode.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: ep.html }} />
    </div>
  )
}

export const query = graphql`
  query PageQuery($episodePath: String!, $bookId: String!) {
    markdownRemark(fields: { episodePath: { eq: $episodePath } }) {
      html
    }
    allTocJson(filter: { fields: { bookId: { eq: $bookId } } }) {
      edges {
        node {
          episodeId
          title
        }
      }
    }
  }
`

const Title = styled.div``

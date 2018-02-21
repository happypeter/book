import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Header from '../components/Header'

export default ({ data, pathContext }) => {
  const { bookId } = pathContext

  const toc = data.allTocJson.edges.map(t => t.node.episodeId)
  return (
    <Wrap>
      <Header bookId={bookId} />
      {toc.map(t => (
        <StyledLink key={t} to={`${bookId}/${t}`}>
          {t}
        </StyledLink>
      ))}
    </Wrap>
  )
}

export const query = graphql`
  query TocQuery($bookId: String!) {
    allTocJson(filter: { fields: { bookId: { eq: $bookId } } }) {
      edges {
        node {
          episodeId
        }
      }
    }
  }
`

const Wrap = styled.div`
  width: 300px;
  margin: 20px auto;
`

const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  margin: 5px;
`

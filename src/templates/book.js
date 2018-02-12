import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

export default ({ data, pathContext }) => {
  console.log('data', data)
  const { bookId } = pathContext
  const toc = data.allTocJson.edges.map(t => t.node.id)
  return (
    <Wrap>
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
          id
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

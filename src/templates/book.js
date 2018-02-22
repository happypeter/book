import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { coverPngUrl } from '../constants/Assets'
import books from '../../config/index.json'
import Header from '../components/Header'

export default ({ data, pathContext }) => {
  const { bookId } = pathContext
  const book = books.find(t => t.id === bookId)
  const toc = data.allTocJson.edges.map(t => t.node)
  console.log('toc', toc)
  return (
    <Wrap>
      <Header bookId={bookId} />
      <Img src={coverPngUrl(book)} />
      <Title>{book.title}</Title>
      {toc.map(t => (
        <StyledLink key={t.episodeId} to={`${bookId}/${t.episodeId}`}>
          {t.title}
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
          title
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

const Img = styled.img``
const Title = styled.div``

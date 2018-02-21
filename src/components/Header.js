import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import books from '../../config/index.json'

export default ({ bookId }) => {
  const book = books.find(t => t.id === bookId)
  return (
    <div>
      <StyledLink to="/">好奇图书馆</StyledLink>
      {`>`}
      <StyledLink to={`/${book.id}`}>{book.title}</StyledLink>
    </div>
  )
}

const StyledLink = styled(Link)`
  color: red;
`

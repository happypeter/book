import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import books from '../../config/index.json'
import Search from '../components/DocSearch'

export default ({ bookId }) => {
  const book = books && books.find(t => t.id === bookId)
  return (
    <Header>
      <Nav>
        <StyledLink to="/">
          {' '}
          <img src={require('../img/head.svg')} />
          好奇图书馆
        </StyledLink>

        {book && (
          <StyledLink to={`/${book.id}`}>&nbsp;> {book.title}</StyledLink>
        )}
      </Nav>
      <Search />
    </Header>
  )
}

const Header = styled.div`
  position: fixed;
  top:0;
  left: 0;
  z-index:9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100vw;
  background: #fff;
  box-shadow: 0 calc(8px / 2) 8px rgba(0,0,0,.05);
  padding: 0 24px;
  flex-shrink: 0;
`

const StyledLink = styled(Link) `
  display: flex;
  color: #151313;
  line-height: 100px;

  font-size: 24px;
  img {
    margin-right: 18px;
  }
`
const Nav = styled.div`
  display: flex;
`

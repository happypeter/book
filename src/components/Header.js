import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import books from '../../config/index.json'

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

        {book && <StyledLink to={`/${book.id}`}>> {book.title}</StyledLink>}
      </Nav>
      <Search>
        <img src={require('../img/Shape.svg')} />
        <input type="text" />
      </Search>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 24px;
  flex-shrink: 0;
`

const StyledLink = styled(Link)`
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

const Search = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 15px;
    left: 15px;
  }
  input {
    width: 325px;
    height: 54px;
    background-color: #a7f0f8;
    border: none;
    border-radius: 5px;
    font-size: 24px;
    color: #151313;
    padding-left: 50px;
  }
  input:focus {
    outline: none;
  }
`

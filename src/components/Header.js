import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import books from '../../config/index.json'
import Search from '../components/DocSearch'
import Logo from './Logo.js'
import { PRIMARY_COLOR } from '../constants/Colors'

export default ({ bookId }) => {
  const book = books && books.find(t => t.id === bookId)
  const fill = window.innerWidth <= 630 ? '#FFF' : PRIMARY_COLOR
  return (
    <Header>
      <Nav>
        <StyledLink to="/">
          {' '}
          <Logo width="41px" height="41px" fill={fill} />
          好奇图书馆 &nbsp;
        </StyledLink>

        {book && (
          <StyledLink to={`/${book.id}`}>{window.innerWidth <= 630 ? null : `> ${book.title}`}</StyledLink>
        )}
      </Nav>
      <Search />
    </Header>
  )
}

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  background: #fff;
  box-shadow: 0 calc(8px / 2) 8px rgba(0, 0, 0, 0.05);
  padding: 0 24px;
  flex-shrink: 0;
  @media (max-width: 630px) {
    background: #60bec6;
    padding: 0;
    justify-content: center;
    height: 80px;
  }
`

const StyledLink = styled(Link) `
  display: flex;
  color: #151313;
  line-height: 100px;
  align-items: center;
  font-size: 24px;
  svg {
    margin-right: 18px;
  }
  @media (max-width: 630px) {
    color: #fff;
  }
`

const Nav = styled.div`
  display: flex;
`

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { coverPngUrl } from '../constants/Assets'
import BookBox from '../components/BookBox'
import books from '../../config/index.json'
import Header from '../components/Header'

export default () => {
  return (
    <div>
      <Header />
      <Hero>
        <h1>好奇图书馆</h1>
      </Hero>
      <Books>
        {books.map(book => (
          <BookBox
            imgUrl={coverPngUrl(book)}
            key={book.id}
            title={book.title}
            id={book.id}
          />
        ))}
      </Books>
      <Footer>
        <h2>好奇图书馆</h2>
      </Footer>
    </div>
  )
}

const Hero = styled.div`
  height: 346px;
  background: #60BEC6;
  margin: 100px 0 64px;
  h1 {
    text-align: center;
    color: #fff;
    padding-top: 110px;
    margin-bottom: 50px;
  }
  .search {
    display: block;
    margin: 0 auto;
  }
`

const Books = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 218px;
`

const Footer = styled.div`
  background: #90999C;
  h2 {
    text-align: center;
    padding: 80px 0;
    margin: 0;
    color: #fff;
  }
`

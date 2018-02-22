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
        <div className="container">
          {books.map(book => (
            <BookBox
              imgUrl={coverPngUrl(book)}
              key={book.id}
              title={book.title}
              id={book.id}
            />
          ))}
        </div>
      </Books>
      <Footer>
        <h2>好奇图书馆</h2>
      </Footer>
    </div>
  )
}

const Hero = styled.div`
  height: 346px;
  background: #00bcd4;
  margin-bottom: 64px;
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
  border-top: 20px solid #d8d8d8;
  .container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  margin-bottom: 218px;
`

const Footer = styled.div`
  background: #2a3745;
  h2 {
    text-align: center;
    padding: 80px 0;
    margin: 0;
    color: #fff;
  }
`

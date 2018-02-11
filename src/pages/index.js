import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { getImgUrl } from '../utils'
import { Input } from 'antd'
const Search = Input.Search
import BookBox from '../components/BookBox'
import books from '../../config/index.json'

export default () => {
  return (
    <div>
      <Header>
        <h1>好奇图书馆</h1>
        <Search
          className="search"
          placeholder="search"
          onSearch={value => console.log(value)}
          style={{ width: 426 }}
        />
      </Header>
      <Books>
        <div className="container">
          {books.map(book => (
            <BookBox
              imgUrl={getImgUrl(book)}
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

const Header = styled.div`
  height: 446px;
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

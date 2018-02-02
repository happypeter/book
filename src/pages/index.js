import React from "react"
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Input } from 'antd';
const Search = Input.Search;


export default () => {
  return (
    <div>
      <Header>
        <h1>
          好奇图书馆
        </h1>
        <Search
          className="search"
          placeholder="search"
          onSearch={value => console.log(value)}
          style={{ width: 426 }}
        />
      </Header>
      <Books>
        <div className="container" >
        <div className="book-box">
          <img src={require('../img/gold-medal.svg')} />
          <div>
            <div className="decorate">
              <div className="i"></div>
              <div className="i"></div>
            </div>
            <Link to='/book' className="book">
              <div className="line"></div>
              <div className="cover">
                <div className="pic">
                  <img src={require('../img/rabbit.png')} />
                </div>
                <h2 className="title">Git 和 Github 上手</h2>
                <span>作者：happypeter</span>
              </div>
            </Link>
          </div>
        </div>
          <div className="book-box">
            <img src={require('../img/gold-medal.svg')} />
            <div>
              <div className="decorate">
                <div className="i"></div>
                <div className="i"></div>
              </div>
              <Link to='/book' className="book">
                <div className="line"></div>
                <div className="cover">
                  <div className="pic">
                    <img src={require('../img/rabbit.png')} />
                  </div>
                  <h2 className="title">Git 和 Github 上手</h2>
                  <span>作者：happypeter</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Books>
      <Books>
        <div className="container" >
          <div className="book-box">
            <img src={require('../img/gold-medal.svg')} />
            <div>
              <div className="decorate">
                <div className="i"></div>
                <div className="i"></div>
              </div>
              <Link to='/book' className="book">
                <div className="line"></div>
                <div className="cover">
                  <div className="pic">
                    <img src={require('../img/rabbit.png')} />
                  </div>
                  <h2 className="title">Git 和 Github 上手</h2>
                  <span>作者：happypeter</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="book-box">
            <img src={require('../img/gold-medal.svg')} />
            <div>
              <div className="decorate">
                <div className="i"></div>
                <div className="i"></div>
              </div>
              <Link to='/book' className="book">
                <div className="line"></div>
                <div className="cover">
                  <div className="pic">
                    <img src={require('../img/rabbit.png')} />
                  </div>
                  <h2 className="title">Git 和 Github 上手</h2>
                  <span>作者：happypeter</span>
                </div>
              </Link>
            </div>
          </div>
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
    margin-bottom:50px;
  }
  .search{
    display: block;
    margin:0 auto
  }
`

const Books = styled.div`
  border-top: 20px solid #d8d8d8;
  .container {
    max-width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-around;
    .book-box {
      display: flex;
      align-items: flex-start;
      margin-bottom: 220px;
      .decorate {
        margin-left: 100px;
        display:flex;
        justify-content: space-between;
        padding: 0 40px;
        .i {
          width: 19px;
          height: 64px;
          background: #A12C2C;
          
        }
      }
      .book {
        display: flex;
        align-items: flex-start;
        width: 278px;
        height: 403px;
        margin-left: 100px;
        background: #E7EAE3;
        .line {
          height: 100%;
          width: 19px;
          background: #01A6BB;
          margin-left: 14px;
        }
        .cover {
          flex-grow: 1;
          height: 100%;
          display: flex;
          padding: 40px 0;
          flex-direction: column;
          justify-content: space-between;
          color: #353131;
          .pic {
            display: flex;
            align-items: center;
            width: 153px;
            height: 153px;
            background: #fff;
            margin: 0 auto;
            border-radius: 50%;
            img {
              margin: 0 auto;
            }
          }
          .title {
            text-align: center;
          }
          span {
            display: block;
            text-align: center;
          }
        }
      }
    }
  }
`

const Footer = styled.div`
  background: #2A3745;
  h2 {
    text-align: center;
    padding: 80px 0;
    margin: 0;
    color: #fff;
  }
`



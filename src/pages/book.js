import React from "react"
import styled from 'styled-components'
import Link from 'gatsby-link'

export default ({ data }) => {
  const { edges: posts } = data.allIndexJson
  return (
    <div>
      <Header>
        <Link className="home" to='/'>
          <img src={require('../img/head.svg')} />
          <h2>好奇图书馆</h2>
        </Link>
      </Header>
      <Profile>
        <div className="container">
          <div className="pic">
            <img src={require('../img/rabbit.png')} />
          </div>
          <div className="intro">
            <h1 className="title">Git 和 Github 上手</h1>
            <span>作者：happypeter</span>
            <p>《 Git 北京》是一本带初学者学会 git 版本控制工具和 github.com 社交化编程平台的书。用爱打造。这里免费开放的《搬进 Github》是《 Git 北京》的第一部分内容。</p>
          </div>
        </div>
      </Profile>
      <Catalog>
        <div className="container">
          <ul>
            {
              posts.map(p => (
                <StyledLink key={p.node.id} to={`/posts/${p.node.id}`}>
                <img src={require('../img/popcorn.svg')} />                
                  <span>{p.node.title}</span>
                </StyledLink>
              ))
            }
          </ul>
        </div>
      </Catalog>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allIndexJson {
      edges {
        node {
          id,
          title
        }
      }
    }
  }
`

const Header = styled.div`
  .home {    
    display: flex;
    height: 100px;
  }
  img {
    margin-left: 24px;
  }
  h2 {
    font-weight: 400;
    margin: 0;
    margin-left: 24px;
    line-height: 100px;
  }
`

const Profile = styled.div`
  padding: 110px 0;
  background: #00bcd4;
  .container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    .pic {
      display: flex;
      align-items: center;
      width: 153px;
      height: 153px;
      margin-left: 220px;
      background: #fff;
      border-radius: 50%;
      img {
        margin: 0 auto;
      }
    }
    .intro {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 500px;
      margin-left: 110px;
      h1 {
        margin: 0;

      }
      p {
        margin: 0;
      }
    }
  }
`


const Catalog = styled.div`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    ul {
      list-style: none;
      padding: 0;
      width: 658px;
      margin: 0 auto;
      margin-top: 110px;
      font-size: 24px;
    }  
  }
` 

const StyledLink = styled(Link) `
  display: flex;
  align-items: center;
  padding: 20px 0;
  color: #353131;
  box-shadow: 0 8px 24px rgba(0,0,0,.1);
  margin-bottom: 50px;
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,.2);
    color: #353131;
  }
  img {
    margin-left: 40px;
  }
  span {
    margin-left: 20px;
  }
`
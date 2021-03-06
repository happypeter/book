import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { coverPngUrl } from '../constants/Assets'
import books from '../../config/index.json'
import Header from '../components/Header'

export default ({ data, pathContext }) => {
  const { bookId } = pathContext
  console.log('pathContext..', pathContext)
  const book = books.find(t => t.id === bookId)
  const toc = data.allTocJson.edges.map(t => t.node)
  return (
    <Wrap>
      <Header bookId={bookId} />
      <Content>
        <Hero>
          <div className="contianed">
            <div className="cover">
              <Img>
                <img src={coverPngUrl(book)} />
              </Img>
              <Title>{book.title}</Title>
            </div>
          </div>
        </Hero>
        <Toc>
          <div className="contained">
            <ul>
              {toc.map(t => (
                <StyledLink key={t.episodeId} to={`${bookId}/${t.episodeId}`}>
                  <img src={require('../img/popcorn.svg')} />
                  <span>{t.title}</span>
                </StyledLink>
              ))}
            </ul>
          </div>
        </Toc>
      </Content>
      <Footer>
        <h2>好奇图书馆</h2>
      </Footer>
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
  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    height: 100vh
  }
`

const Content = styled.div`
   @media (max-width: 630px) {
    flex-grow: 1;
    overflow-y: scroll;
   } 
`

const Hero = styled.div`
  background: linear-gradient(to right, #469CA6 0%, #60BEC6 100%);
  margin-top: 100px;
  .contianed {
    max-width: 1200px;
    height: 384px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .cover {
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 630px) {
    background: #fff;
    margin-top: 80px;
    .contianed {
      width: 100%;
      height: auto;
      padding: 0 20px;
      justify-content: center;
    }
  }
`

const Img = styled.div`
  width: 186px;
  height: 186px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 210px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    filter: grayscale(100%);
    filter: gray;
  }
  @media (max-width: 630px) {
    display: none;
  }
`
const Title = styled.h1`
  font-size: 40px;
  color: #fff;
  margin-left: 40px;
  @media (max-width: 630px) {
    color: #353131;
    font-size: 24px;
    padding: 20px 10px;
    display: inline;
    margin-left: 0px;
    border-bottom: 4px solid #D47490
  }
`
const Toc = styled.div`
  .contained {
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
  @media (max-width: 630px) {   
    width: 100%;
    padding: 0 20px;
    ul {
        width: 100%;
        margin-top: 30px;
      }
    }
  }
`

const StyledLink = styled(Link) `
  display: flex;
  align-items: center;
  padding: 20px 0;
  color: #353131;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    color: #353131;
  }
  img {
    margin-left: 40px;
  }
  span {
    margin-left: 20px;
  }
  @media (max-width: 630px) {
    margin-bottom: 30px;
    span {
      font-size: 16px;
    }
  }
`

const Footer = styled.div`
  background: #90999C;
  h2 {
    text-align: center;
    padding: 80px 0;
    margin: 0;
    color: #fff;
  }
  @media (max-width: 630px) {
    h2 {
      padding: 40px 0;
    }
  }
`

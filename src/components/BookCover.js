import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

export default ({ title, id, imgUrl }) => (
  <StyledLink to={`/${id}`}>
    <div className="line" />
    <div className="cover">
      <div className="pic">
        <img src={imgUrl} />
      </div>
      <h2 className="title">{title}</h2>
      <span>BookId: {id}</span>
    </div>
  </StyledLink>
)

const StyledLink = styled(Link) `
  display: flex;
  width: 100%;
  height: 400px;
  background: #A7CBD0;
  .line {
    width: 19px;
    background: #D47490;
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
        width: 100%;
        margin: 0 auto;
        filter: grayscale(100%);
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
  @media (max-width: 630px) {
    height: auto;
    background: #fff;
    box-shadow: 0 8px 24px rgba(0,0,0,.1);
    .line {
      width: 12px;
    }
    .cover {
      padding: 15px 0;
    }
    .cover .title {
      text-align: left;
      margin-left: 30px;
      font-size: 20px;
    }
    .cover .pic {
      display: none;
    }
    .cover span {
      display: none;
    }
  }
`

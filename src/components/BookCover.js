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

const StyledLink = styled(Link)`
  display: block;
  display: flex;
  width: 100%;
  height: 400px;
  background: #e7eae3;
  .line {
    height: 100%;
    width: 19px;
    background: #01a6bb;
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
`

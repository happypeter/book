import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

export default ({ title, id }) => (
  <StyledLink to="/book">
    <div className="line" />
    <div className="cover">
      <div className="pic">
        <img src={require('../img/rabbit.png')} />
      </div>
      <h2 className="title">{title}</h2>
      <span>本书 id: {id}</span>
    </div>
  </StyledLink>
)

const StyledLink = styled(Link)`
  display: block;
  display: flex;
  width: 100%;
  height: 403px;
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
`

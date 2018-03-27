import React from 'react'
import styled from 'styled-components'
import BookCover from './BookCover'

export default props => (
  <Wrap>
    <CoverWrap>
      <Tape />
      <BookCover {...props} />
    </CoverWrap>
  </Wrap>
)

const Wrap = styled.div`
  width: 40%;
  border-top: 20px solid #90999c;
  margin-bottom: 100px;
  box-sizing: content-box;
  &: nth-child(odd) {
    padding-left: 10%;

  }
  &: nth-child(even) {
    padding-right: 10%;
  }
  @media (max-width: 630px) {
    width: 100%;
    border-top: none;
    margin-top: 35px;
    margin-bottom: 0;
    box-sizing: border-box;
    &: nth-child(odd) {
      padding: 0;
    }
    &: nth-child(even) {
      padding: 0;
    }
  }
`

const Tape = styled.div`
  height: 64px;
  width: 170px;
  margin: 0 auto;
  border-right: 20px solid #90999c;
  border-left: 20px solid #90999c;
  @media (max-width: 630px) {
    display: none;
  }
`

const CoverWrap = styled.div`
  width: 300px;
  margin: 0 auto;
  @media (max-width: 630px) {
    width: 100%;
    padding: 0 10px;
  }
`

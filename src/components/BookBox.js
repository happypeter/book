import React from 'react'
import styled from 'styled-components'
import BookCover from './BookCover'
import { TapeRed } from '../constants/Colors'

export default props => (
  <Wrap>
    <CoverWrap>
      <Tape />
      <BookCover {...props} />
    </CoverWrap>
  </Wrap>
)

const Wrap = styled.div`
  width: 50%;
  border-top: 20px solid #90999C;
  margin-bottom: 100px;
  @media (max-width: 630px) {
    width: 100%;
    border-top: none;
    margin-top: 35px;
    margin-bottom: 0;
  }
`

const Tape = styled.div`
  height: 64px;
  width: 170px;
  margin: 0 auto;
  border-right: 20px solid #90999C;
  border-left: 20px solid #90999C;
  @media (max-width: 630px) {
    display: none
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

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
`

const Tape = styled.div`
  height: 64px;
  width: 170px;
  margin: 0 auto;
  border-right: 20px solid #90999C;
  border-left: 20px solid #90999C;
`

const CoverWrap = styled.div`
  width: 300px;
  margin: 0 auto
`

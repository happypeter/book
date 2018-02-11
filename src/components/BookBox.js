import React from 'react'
import styled from 'styled-components'
import BookCover from './BookCover'
import Medal from './Medal'
import { TapeRed } from '../constants/Colors'

export default () => (
  <Wrap>
    <Left>
      <Medal />
    </Left>
    <Right>
      <Tape />
      <CoverWrap>
        <BookCover id="git" title="Git 入门" />
      </CoverWrap>
    </Right>
  </Wrap>
)

const Wrap = styled.div`
  display: flex;
`

const Left = styled.div`
  margin-right: 106px;
`

const Right = styled.div`
  width: 280px;
`

const Tape = styled.div`
  height: 64px;
  width: 170px;
  margin: 0 auto;
  border-right: 20px solid ${TapeRed};
  border-left: 20px solid ${TapeRed};
`

const CoverWrap = styled.div``

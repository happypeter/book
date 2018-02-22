import React from 'react'
import styled from 'styled-components'
import BookCover from './BookCover'
import { TapeRed } from '../constants/Colors'

export default props => (
  <Wrap>
    <Tape />
    <CoverWrap>
      <BookCover {...props} />
    </CoverWrap>
  </Wrap>
)

const Wrap = styled.div`
  width: 300px;
`

const Tape = styled.div`
  height: 64px;
  width: 170px;
  margin: 0 auto;
  border-right: 20px solid ${TapeRed};
  border-left: 20px solid ${TapeRed};
`

const CoverWrap = styled.div``

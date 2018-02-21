import React from 'react'
import Link from 'gatsby-link'
import '../assets/global.css'
import 'prismjs/themes/prism-solarizedlight.css'
import styled from 'styled-components'

export default ({ children }) => {
  return <div>{children()}</div>
}

const Wrap = styled.div`
  height: 100vh;
  display: flex;
`

const Sider = styled.div`
  flex-basis: 250px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`
const Layout = styled.div`
  flex-grow: 1;
`

const LogoWrap = styled.div`
  height: 64px;
  text-align: center;
  line-height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

const NavWrap = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    li {
      color: rgba(0, 0, 0, 0.87);
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      line-height: 1.71429em;
      padding: 8px 16px;
    }
  }
`

const Content = styled.div`
  max-width: 900px;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;
  padding-top: 80px;
`

const StyledLink = styled(Link)`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  .btn {
    width: 100%;
    border: none;
    padding: 8px 24px;
    text-align: left;
  }
  .ant-btn-danger {
    color: #000;
    background-color: #fff;
    border-radius: 0;
  }
  .ant-btn-danger:hover,
  .ant-btn-danger:focus {
    color: #000;
    background-color: #f5f5f5;
  }
  .ant-btn-clicked:after {
    border-color: #f5f5f5;
  }
`

import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Input } from 'antd';

export default ({ data }) => {
  const post = data.markdownRemark
  const { title } = data.indexJson
  const { edges: posts } = data.allIndexJson
  return (
    <Wrap>
      <Helmet title={title} />
      <Header>
        <Breadcrumb>
          <Link to='/'>
            <img src={require('../img/head.svg')} />
            <h2>好奇图书馆></h2> 
          </Link>   
          <h2>{title}</h2>
        </Breadcrumb>      
      </Header>
      <Main>
        <Sider>
          <Search>
            <Input />
          </Search>
          <Nav>
          {
            posts.map(p => (
              <StyledLink key={p.node.id} to={`/posts/${p.node.id}`}>
                {p.node.title}
              </StyledLink>
            ))
          }
          </Nav>
        </Sider>
        <Content>
          <ContentHeader></ContentHeader>
          <ContentMain>
            <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </ContentMain>
        </Content>
      </Main>
      
    </Wrap>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!, $pid: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
    }
    indexJson(id: {eq: $pid}) {
      title
    }
    allIndexJson {
      edges {
        node {
          id,
          title
        }
      }
    }  
  }  
`


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Header = styled.div`
display: flex;
height: 100px;
  img {
    margin: 0 24px;
  }
  h2 {
    font-weight: 400;
    margin: 0;
    line-height: 100px;
  }
`

const Breadcrumb = styled.div`
  display: flex;
  height: 100px;
  a {
    display: flex;
  }
`

const Main = styled.div`
  flex-grow: 1;
  display: flex;
`

const Sider = styled.div`
  width: 321px;
  display: flex;
  flex-direction: column;
`

const Search = styled.div`
  background: #00bcd4;
  height: 100px;
  padding: 0 60px;
  display: flex;
  align-items: center;
`

const Nav = styled.div`
  flex-grow: 1;
  background: #0A97A9;
`

const StyledLink = styled(Link) `
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  display: block;
  line-height: 40px;
  padding-left: 40px;
  color: #fff;
  &:hover {
    background: rgb(232, 232, 232);
  }
`

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: #00bcd4;
`

const ContentHeader = styled.div`
  background: #0A97A9;
  height: 100px;
`

const ContentMain = styled.div`
  flex-grow: 1;
  margin: 24px;
  padding: 24px;
  border-radius: 6px;
  background: #fff;
  overflow-y: scroll;
`


import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

export default ({ data, pathContext }) => {
  const { episodeId, bookId } = pathContext
  const episodes = data.allTocJson.edges.map(t => t.node)
  const episode = episodes.find(t => t.episodeId === episodeId)
  const ep = data.markdownRemark
  return (
    <div>
      <Header bookId={bookId} />
      <Content>
        <Side>
          <Sidebar episodes={episodes} episodeId={episodeId} bookId={bookId} />
        </Side>
        <Page>
          <Title>{episode.title}</Title>
          <Main dangerouslySetInnerHTML={{ __html: ep.html }} />
        </Page>
      </Content>
    </div>
  )
}

export const query = graphql`
  query PageQuery($episodePath: String!, $bookId: String!) {
    markdownRemark(fields: { episodePath: { eq: $episodePath } }) {
      html
    }
    allTocJson(filter: { fields: { bookId: { eq: $bookId } } }) {
      edges {
        node {
          episodeId
          title
        }
      }
    }
  }
`

const Title = styled.div`
  text-align: center;
  border: 2px solid red;
  padding: 20px;
  font-size: 24px;
`

const Main = styled.div`
  border: 2px solid teal;
  width: 800px;
  img {
    width: 100%;
  }
`

const Content = styled.div`
  margin-top: 20px;
  display: flex;
`

const Side = styled.div`
  flex-basis: 200px;
`

const Page = styled.div`
  padding-left: 20px;
`

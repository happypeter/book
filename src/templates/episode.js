import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

export default ({ data, pathContext }) => {
  const { episodeId, bookId } = pathContext
  const episodes = data.allTocJson.edges.map(t => t.node)
  console.log('episodes...episodeId', episodes, episodeId)
  const episode = episodes.find(t => t.episodeId === episodeId)
  const ep = data.markdownRemark
  return (
    <Wrap>
      <Header bookId={bookId} />
      <Content>
        <Side>
          <Sidebar episodes={episodes} episodeId={episodeId} bookId={bookId} />
        </Side>
        <Page className="docSearch-content">
          <Title>{episode.title}</Title>
          <Main dangerouslySetInnerHTML={{ __html: ep.html }} />
        </Page>
      </Content>
    </Wrap>
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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Title = styled.div`
  width: 810px;
  margin: 0 auto;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px 6px 0 0;
  padding: 20px;
  font-size: 24px;
  background-color: #0a97a9;
  color: #fff;
  margin-top: 24px;
  margin-bottom: 24px;
`

const Main = styled.div`
  border-radius: 6px;
  background-color: #fff;
  width: 810px;
  margin: 0 auto;
  padding: 20px;
  font-size: 14px;
  flex-grow: 1;
  overflow-y: auto;
  img {
    width: 100%;
  }
`

const Content = styled.div`
  display: flex;
  flex-grow: 1;
`

const Side = styled.div`
  flex-basis: 320px;
  padding: 28px 0;
  background-color: #0a97a9;
  flex-shrink: 0;
  overflow-y: auto;
`

const Page = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  background: linear-gradient(to left top, #ddf3f6 0%, #27d4e7 100%);
  padding-bottom: 15px;
`

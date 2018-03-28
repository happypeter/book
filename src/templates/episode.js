import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

class Episode extends React.Component {
  componentDidMount() {
    if (this.props.location.hash) {
      setTimeout(function () {
        var top = window.scrollY;
        scrollTo(0, top - 120);
      }, 100);
    }
  }
  render() {
    const { pathContext, data } = this.props
    const { episodeId, bookId } = pathContext
    const episodes = data.allTocJson.edges.map(t => t.node)
    console.log('episodes...episodeId', episodes, episodeId)
    const episode = episodes.find(t => t.episodeId === episodeId)
    const ep = data.markdownRemark
    console.log(bookId)
    return (
      <Wrap>
        <Header bookId={bookId} />
        <Content>
          <Side>
            <Sidebar episodes={episodes} episodeId={episodeId} bookId={bookId} />
          </Side>
          <Page className="docSearch-content">
            <Title to={`/${bookId}`}><h2>{episode.title}</h2></Title>
            <Main dangerouslySetInnerHTML={{ __html: ep.html }} />
          </Page>
        </Content>
      </Wrap>
    )
  }
}

export default Episode


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
`

const Title = styled(Link) `
  width: calc(100% - 135px);
  margin: 0 auto;
  text-align: center;
  flex-shrink: 0;
  border-radius: 6px 6px 0 0;
  font-size: 24px;
  background-color: #53A6AE;
  color: #fff;
  margin-top: 24px;
  margin-bottom: 24px;
  h2 {
    font-size: 24px;
    color: #fff;
  }
  @media (max-width: 630px) {
    width: 100%;
    background: #fff;
    margin-top: 20px;
    padding: 0;
    h2 {
      display: inline;
      color: #353131;
      font-size: 24px;
      padding: 20px 10px;
      border-bottom: 4px solid #D47490;
    }
  }
`

const Main = styled.div`
  border-radius: 6px;
  background-color: #fff;
  width: calc(100% - 135px);
  margin: 0 auto;
  padding: 20px;
  font-size: 14px;
  line-height:1.8;
  flex-grow: 1;
  h3 {
    margin: 30px 0;
    font-size: 40px;
  }
  img {
    width: 100%;
    margin: 0 auto;
  }
  blockquote {
    background: #E0EEF4;
    margin: 1em 0;
    padding: 1em 30px;
    border-left: 10px solid #377C9C;
    width: 100%;
  }

  a {
    color: #53A6AE;
  }
  
  @media (max-width: 630px) {
    width:100%;
    h3 {
      margin: 20px 0;
      font-size: 30px;
    }
  }
  .gatsby-highlight {
    width: 100%;
    pre {
      line-height: 1.8;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
`

const Content = styled.div`
  display: flex;
  margin-top: 100px;
  @media (max-width: 630px) {
    margin-top: 80px;
  }
`

const Side = styled.div`
  height: calc(100vh - 100px);
  width: 320px;
  position: fixed;
  left: 0;
  padding: 28px 0;
  background-color: #53A6AE;
  flex-shrink: 0;
  overflow-y: auto;
  @media (max-width: 630px) {
    display:none;
  }
`

const Page = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to left top, #FFFFFF 0%, #A7CBD0 100%);
  padding-bottom: 15px;
  margin-left: 320px;
  min-height: calc(100vh - 100px);
  @media (max-width: 630px) {
    margin-left: 0;
    background: #fff;
  }
`

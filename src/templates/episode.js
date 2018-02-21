import React from 'react'
import Header from '../components/Header'

export default ({ data, pathContext }) => {
  const ep = data.markdownRemark
  const { episode } = pathContext
  const bookId = episode.split('/')[1]
  console.log('pathContext.....', bookId)
  return (
    <div>
      <Header bookId={bookId} />
      <div dangerouslySetInnerHTML={{ __html: ep.html }} />
    </div>
  )
}

export const query = graphql`
  query PageQuery($episode: String!) {
    markdownRemark(fields: { episode: { eq: $episode } }) {
      html
    }
  }
`

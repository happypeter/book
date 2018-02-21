import React from 'react'

export default ({ data, pathContext }) => {
  console.log('pathContext====', pathContext)
  const ep = data.markdownRemark
  return <div dangerouslySetInnerHTML={{ __html: ep.html }} />
}

export const query = graphql`
  query PageQuery($episode: String!) {
    markdownRemark(fields: { episode: { eq: $episode } }) {
      html
    }
  }
`

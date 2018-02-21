import React from 'react'

export default ({ data, pathContext }) => {
  console.log('pathContext====', pathContext)
  const ep = data.markdownRemark
  return <div dangerouslySetInnerHTML={{ __html: ep.html }} />
}

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

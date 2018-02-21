import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ episodeId, episodes, bookId }) => {
  return (
    <div>
      {episodes.map(t => (
        <StyledLink
          key={t.episodeId}
          isCurrent={t.episodeId === episodeId}
          to={`/${bookId}/${t.episodeId}`}
        >
          {t.title}
        </StyledLink>
      ))}
    </div>
  )
}

const StyledLink = styled(Link)`
  color: ${props => (props.isCurrent ? 'red' : '#212121')};
  display: block;
  border: 2px solid red;
  padding: 20px;
`

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ episodeId, episodes, bookId }) => {
  return (
    <div>
      {episodes.map(t => (
        <StyledLink
          key={t.episodeId}
          isActive={() => t.episodeId === episodeId}
          activeStyle={{
            color: 'green'
          }}
          to={`/${bookId}/${t.episodeId}`}
        >
          {t.title}
        </StyledLink>
      ))}
    </div>
  )
}

const StyledLink = styled(Link)`
  display: block;
  border: 2px solid red;
  padding: 20px;
`

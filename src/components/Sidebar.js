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
            color: '#fff'
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
  color: rgba(255, 255, 255, 0.64);
  padding: 20px;
  height: 100%;
  overflow-y: scroll;
`

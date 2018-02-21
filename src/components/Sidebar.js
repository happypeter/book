import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ episodeId, toc }) => {
  console.log('currentItem', episodeId, toc)
  return (
    <div>
      {toc.map(t => (
        <StyledLink
          key={t}
          isActive={() => t === episodeId}
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
          to={t}
        >
          {t}
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

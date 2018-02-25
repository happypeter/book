import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Background from '../img/fire.svg'

class Sidebar extends React.Component {
  render() {
    const episodeId = this.props.episodeId
    const episodes = this.props.episodes
    const bookId = this.props.bookId

    return (
      <div>
        {episodes.map(t => (
          <StyledLink
            key={t.episodeId}
            isActive={() => t.episodeId === episodeId}
            activeStyle={{
              color: '#fff',
              background: `url(${Background})` + 'no-repeat',
              backgroundPosition: '98% 50% '
            }}
            to={`/${bookId}/${t.episodeId}`}
          >
            {t.title}
          </StyledLink>
        ))}
      </div>
    )
  }
}

export default Sidebar

const StyledLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.64);
  padding: 20px;
  margin-right: 5px;
`

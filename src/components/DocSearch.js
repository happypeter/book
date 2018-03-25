import React, { Component } from 'react'
import styled from 'styled-components'

class DocSearch extends Component {
  state = {
    enabled: true
  }

  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        apiKey: '731d11ffae6b19a7479686c043b7e099',
        indexName: 'haoqicat',
        inputSelector: '#algolia-doc-search'
      })
    } else {
      console.warn('Search has failed to load and now is being disabled')
      this.setState({ enabled: false })
    }
  }

  render() {
    const { enabled } = this.state

    return enabled ? (
      <Search>
        <img src={require('../img/Shape.svg')} />
        <input id="algolia-doc-search" type="search" />
      </Search>
    ) : null
  }
}

export default DocSearch

const Search = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 19px;
    left: 15px;
    z-index: 1000;
  }
  input {
    width: 325px;
    height: 54px;
    background-color: #A7CBD0;
    border: none;
    border-radius: 5px;
    font-size: 24px;
    color: #151313;
    padding-left: 50px;
  }
  input:focus {
    outline: none;
  }
`

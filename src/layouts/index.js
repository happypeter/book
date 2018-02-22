import React from 'react'
import Link from 'gatsby-link'
import '../assets/global.css'
import 'prismjs/themes/prism-okaidia.css'
import styled from 'styled-components'

export default ({ children }) => {
  return <div>{children()}</div>
}

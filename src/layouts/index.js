import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ParticlesWrapper from '../components/ParticlesWrapper'
import resetStyles from '../resetStyles'
import styled from 'styled-components'

const Layout = ({ children, data }) => (
  <div>
    <ParticlesWrapper />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <style type="text/css">{resetStyles}</style>
    </Helmet>
    <div>{children()}</div>
  </div>
)

// const StyledLayout = styled(Layout)`
//   height: 100%;
// `

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

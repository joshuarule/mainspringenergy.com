/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Nav from './header'
import Footer from './footer'

const Layout = ({ children, className = null, navTheme }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="overflow-x-hidden">
      <Headroom>
        <Nav theme={navTheme} />
      </Headroom>
      <main className={`${className}`} style={{ minHeight: '50vh' }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

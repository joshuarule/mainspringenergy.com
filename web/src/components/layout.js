import React from 'react'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'

import Nav from './Header'
import Footer from './Footer'

const Layout = ({ children, className = null, navTheme }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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

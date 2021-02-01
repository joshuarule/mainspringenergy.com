import React from 'react'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'

import Nav from './Header'
import Footer from './Footer'

const Layout = ({ children, className = null, navTheme, location }) => {
  const pathname =
    location.pathname === '/' ? 'home' : location.pathname.slice(1)
  const cleanedPathname = pathname.replace(/\//i, '')

  return (
    <div className={`overflow-x-hidden page-${cleanedPathname}`}>
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

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Headroom from 'react-headroom'
import PropTypes from 'prop-types'

import Nav from './Header'
import Icon from './Icon'
import Footer from './Footer'
import { ParseLink } from '../helpers/paths'

const Layout = ({ children, className = null, navTheme, location }) => {
  const isHome = location.pathname === '/'
  const pathname = isHome ? 'home' : location.pathname.slice(1)
  const cleanedPathname = pathname.replace(/\//i, '')

  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          sanityInfoBar {
            title
            visible
            link {
              label
              path
            }
          }
        }
      `}
      render={({ sanityInfoBar: infoBar }) => {
        const showInfoBar = isHome && infoBar.visible === true
        const hasLink = infoBar.link && infoBar.link.path
        return (
          <div className={`overflow-x-hidden page-${cleanedPathname}`}>
            {showInfoBar && (
              <div
                className={`infoBar bg-freshBlue text-white flex items-center relative z-10 transition-colors ${
                  infoBar.link && infoBar.link.path
                    ? 'hover:bg-freshBlueDark'
                    : ''
                }`}
              >
                <div className="container flex-1 font-regular my-c f-b1">
                  <p className="mr-c f-b1">{infoBar.title}</p>
                  {hasLink && (
                    <>
                      <ParseLink
                        path={infoBar.link.path}
                        className="ml-b inline-block font-medium text-white absolute inset-0"
                      >
                        <span className="sr-only">{infoBar.link.label}</span>
                      </ParseLink>
                      <span className="text-white font-bold whitespace-nowrap">
                        {infoBar.link.label}
                        <Icon
                          name="chevron"
                          className="ml-a inline-block"
                          width=".6em"
                          height=".75em"
                          style={{ marginTop: '-1px' }}
                        />
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}
            <Headroom>
              <Nav theme={navTheme} />
            </Headroom>
            <main className={`${className}`}>{children}</main>
            <Footer />
          </div>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

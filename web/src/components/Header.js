import { Helmet } from 'react-helmet'
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Link } from 'gatsby'

import { useCurrentBreakpoint } from '../hooks/useCurrentBreakpoint'
import Icon from './Icon'

const navLinks = [
  {
    label: 'Solutions',
    url: '/solutions',
  },
  {
    label: 'Technology',
    url: '/technology',
  },
  {
    label: 'Company',
    url: '/company',
  },
  {
    label: 'Careers',
    url: '/careers',
  },
]

const Header = ({ theme = 'light' }) => {
  const headerRef = useRef(null)
  const headerBarRef = useRef(null)
  const breakpoint = useCurrentBreakpoint()

  // const [dimensions, setDimensions] = useState({})
  const [isMenuOpen, toggleMenuOpen] = useState(false)
  // TODO - connect css and js breakpoint with
  const isWindowSmall = breakpoint.width < 1000

  const escFunction = useCallback((event, isMenuOpen) => {
    if (event.keyCode === 27 && isMenuOpen) toggleMenuOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', e => escFunction(e, isMenuOpen), false)
    return () => {
      document.removeEventListener(
        'keydown',
        e => escFunction(e, isMenuOpen),
        false
      )
    }
  }, [isMenuOpen, escFunction])

  const themeClass = theme === 'light' ? 'theme-light' : 'theme-dark'

  return (
    <header>
      <Helmet
        bodyAttributes={{
          class: `${isMenuOpen ? 'menu-is-open' : ''}`,
        }}
      />
      <div ref={headerRef} className="header-wrapper">
        <div
          ref={headerBarRef}
          className={`${themeClass} container header-bar md-max:flex lg:grid lg:grid-cols-12 items-center`}
          style={{ height: '64px' }}
        >
          <div className="flex-1 flex justify-between items-center lg:col-span-4">
            <Link to="/" className="header-logo block">
              <Icon name="logo" className={`w-full h-auto`} />
            </Link>
            {isWindowSmall && (
              <button
                id="menuButton"
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
                aria-controls="mainNav"
                className={`header-menuButton flex-0 
                  ${isMenuOpen ? 'isActive' : ''}
                  ${themeClass}
                `}
                onClick={() => toggleMenuOpen(!isMenuOpen)}
              >
                <div
                  className={`header-menuButton-line header-menuButton-lineExterior`}
                ></div>
                <div
                  className={`header-menuButton-line header-menuButton-lineInterior header-menuButton-lineInterior-1`}
                ></div>
                <div
                  className={`header-menuButton-line header-menuButton-lineInterior header-menuButton-lineInterior-2`}
                ></div>
                <div
                  className={`header-menuButton-line header-menuButton-lineExterior`}
                ></div>
              </button>
            )}
          </div>
          <nav className="header-nav md-max:absolute md-max:w-full lg:col-span-8">
            <ul
              id="mainNav"
              aria-labelledby="menuButton"
              role="navigation"
              className="grid grid-cols-8 list-none list-inside m-0 p-0"
            >
              {navLinks.map((link, i) => (
                <li className="header-nav-item col-span-2" key={`link-${i}`}>
                  <Link
                    to={`${link.url}/`}
                    role="menuitem"
                    activeClassName="link--active"
                    className={`text-h1 font-thin lg:text-b1 lg:font-bold py-2`}
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

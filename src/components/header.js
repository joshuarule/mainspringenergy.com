import { Helmet } from 'react-helmet'
import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { Link } from 'gatsby'

import { useCurrentBreakpoint } from '../hooks/useCurrentBreakpoint'
import Icon from './icon'

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

  const [dimensions, setDimensions] = useState({})
  const [isMenuOpen, toggleMenuOpen] = useState(false)
  const isWindowSmall = breakpoint.width < 640

  useLayoutEffect(() => {
    const ref = isWindowSmall ? headerBarRef : headerRef
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect())
    }
  }, [breakpoint, isWindowSmall])

  // Adds esc button to close open menu
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

  const themeClass = theme == 'light' ? 'text-black' : 'text-white'

  return (
    <header
    // style={{ paddingTop: `${dimensions ? `${dimensions.height}px` : ''}` }}
    >
      <Helmet
        bodyAttributes={{
          class: `${isMenuOpen ? 'menu-is-open' : ''}`,
        }}
      />
      <div ref={headerRef} className="header-wrapper">
        <div
          ref={headerBarRef}
          className="container header-bar w-full md:grid md:grid-cols-12 items-center"
          style={{ height: '64px' }}
        >
          <div className="flex justify-between items-center md:col-span-4">
            <Link
              to="/"
              className="header-logo block"
              style={{ maxWidth: '246px' }}
            >
              <Icon name="logo" className={`${themeClass} w-full h-auto`} />
            </Link>
            {isWindowSmall && (
              <button
                id="menuButton"
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
                aria-controls="mainNav"
                className={`header-menuButton ${isMenuOpen ? 'isActive' : ''}`}
                onClick={() => toggleMenuOpen(!isMenuOpen)}
              >
                <div
                  className={`${themeClass} header-menuButton-line header-menuButton-lineExterior`}
                ></div>
                <div
                  className={`${themeClass} header-menuButton-line header-menuButton-lineInterior header-menuButton-lineInterior-1`}
                ></div>
                <div
                  className={`${themeClass} header-menuButton-line header-menuButton-lineInterior header-menuButton-lineInterior-2`}
                ></div>
                <div
                  className={`${themeClass} header-menuButton-line header-menuButton-lineExterior`}
                ></div>
              </button>
            )}
          </div>
          <nav className="header-nav sm-only:w-full md:col-span-8">
            <ul
              id="mainNav"
              aria-labelledby="menuButton"
              role="navigation"
              className="grid grid-cols-8 list-none list-inside m-0 p-0"
            >
              {navLinks.map((link, i) => (
                <li className="header-nav-item col-span-2" key={`link-${i}`}>
                  <Link
                    to={link.url}
                    role="menuitem"
                    activeClassName="link--active"
                    className={`${themeClass} f-b1 font-bold py-2`}
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

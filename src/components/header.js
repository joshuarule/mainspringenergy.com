import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <nav className="container grid grid-cols-12">
      <div className="col-span-4">
        <Link to="/">{siteTitle}</Link>
      </div>
      <ul className="col-span-8 grid grid-cols-8 list-none list-inside m-0 p-0">
        <li className="col-span-2">
          <Link to="/solutions">Solutions</Link>
        </li>
        <li className="col-span-2">
          <Link to="/technology">Technology</Link>
        </li>
        <li className="col-span-2">
          <Link to="/company">Company</Link>
        </li>
        <li className="col-span-2">
          <Link to="/careers">Careers</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from 'react'
import { Link } from 'gatsby'

function isExternalLink(string) {
  return /(http(s?)):\/\//i.test(string)
}
export const ParseLink = ({ path, className = '', children }) =>
  isExternalLink(path) ? (
    <a href={path} className={className}>
      {children}
    </a>
  ) : (
    <Link to={path} className={className}>
      {children}
    </Link>
  )

import React from 'react'
import { Link } from 'gatsby'
import Icon from './Icon'

export const LinkPrimary = ({ children, ...rest }) => (
  <Link {...rest}>
    {children}{' '}
    <Icon
      name="chevron"
      className="inline-block"
      style={{ marginTop: '-1px' }}
    />
  </Link>
)

export const LinkFull = ({ children, ...rest }) => (
  <Link {...rest}>
    {children}{' '}
    <Icon
      name="chevron"
      className="inline-block"
      width="11"
      height="16"
      style={{ marginTop: '-1px' }}
    />
  </Link>
)

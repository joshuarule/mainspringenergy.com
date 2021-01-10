import React from 'react'
import { Link } from 'gatsby'
import Icon from './Icon'

export const LinkPrimary = ({ children, ...rest }) => (
  <Link {...rest}>
    {children} <Icon name="chevron" className="inline-block" />
  </Link>
)

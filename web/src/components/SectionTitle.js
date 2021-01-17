import React from 'react'
import { LinkPrimary } from './Link'

export default function SectionTitle({
  title,
  subtitle,
  link,
  col_1,
  col_2,
  border,
  className = '',
}) {
  return (
    <div
      className={`lg:grid lg:grid-cols-3 my-d ${
        border ? 'border-t-6 border-brand' : ''
      }
      ${className}
      `}
    >
      <div>
        <h1 className="f-h3">{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {link && link.path && link.label && (
          <LinkPrimary to={link.path}>{link.label}</LinkPrimary>
        )}
      </div>
      {col_1 && <p>{col_1}</p>}
      {col_1 && <p>{col_1}</p>}
      {/* col_2 ??? */}
    </div>
  )
}

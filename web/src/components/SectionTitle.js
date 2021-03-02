import React from 'react'
import { LinkPrimary } from './Link'

export default function SectionTitle({
  title,
  options,
  subtitle,
  link,
  col_1,
  col_2,
  hide_col_1,
  hide_col_2,
  border,
  className = '',
}) {
  // FIX TOP MARGIN
  return (
    <div
      className={`sectionTitle
        lg:grid lg:grid-cols-3
        ${options && options.topMargin ? 'mt-0' : ''}
        ${options && options.bottomMargin ? 'mb-d' : 'mb-f'}
        ${
          border || (options && options.border)
            ? `border-t-6 border-seaGreen pt-c`
            : ''
        }
        ${className}
      `}
    >
      <div>
        <h1
          className={`
            ${options && options.smallTitleSize ? 'f-h3' : 'f-h2'}
            md-max:mb-e
          `}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="sectionTitle-subtitle mt-c mb-c max-w-prose">
            {subtitle}
          </p>
        )}
        {link && link.path && link.label && (
          <LinkPrimary to={link.path} className="mt-d f-b1">
            {link.label}
          </LinkPrimary>
        )}
      </div>
      {col_1 && !hide_col_1 && (
        <p className="f-b1 text-steel md-max:mb-d">{col_1}</p>
      )}
      {col_2 && !hide_col_1 && (
        <p className="f-b1 text-steel md-max:mb-d">{col_2}</p>
      )}
    </div>
  )
}

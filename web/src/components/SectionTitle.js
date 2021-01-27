import React from 'react'
import { LinkPrimary } from './Link'

export default function SectionTitle({
  title,
  options,
  subtitle,
  link,
  col_1,
  col_2,
  border,
  className = '',
}) {
  // FIX TOP MARGIN
  return (
    <div
      className={`
        lg:grid lg:grid-cols-3
        ${options && options.topMargin ? 'mt-0' : ''}
        ${options && options.bottomMargin ? 'mb-0' : 'mb-e lg:mb-f'}
        ${border ? 'border-t-6 border-brand pt-c' : ''}
        ${className}
      `}
    >
      <div>
        <h1
          className={`${options && options.smallTitleSize ? 'f-h3' : 'f-h2'}`}
        >
          {title}
        </h1>
        {subtitle && <p className="mt-c mb-c">{subtitle}</p>}
        {link && link.path && link.label && (
          <LinkPrimary to={link.path} className="mt-d f-b1">
            {link.label}
          </LinkPrimary>
        )}
      </div>
      {col_1 && <p className="f-b2 text-iron">{col_1}</p>}
      {col_2 && <p className="f-b2 text-iron">{col_2}</p>}
    </div>
  )
}

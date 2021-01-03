import { LinkPrimary } from './link'
import React from 'react'

export default function Cta({
  className = '',
  title,
  imgSrc,
  imgAlt,
  description,
  linkUrl,
  linkLabel = 'Learn more',
  ...rest
}) {
  return (
    <section {...rest} className={`grid grid-cols-2 items-center ${className}`}>
      {/* 3/2 */}
      <div>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div>
        <h2 className="f-h3 mb-e">{title}</h2>
        <p className="mb-e">{description}</p>
        <LinkPrimary className="f-b1 font-bold" to={linkUrl}>
          {linkLabel}
        </LinkPrimary>
      </div>
    </section>
  )
}

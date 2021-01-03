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

export const CtaThird = ({
  className = '',
  reverse = false,
  title,
  imgSrc,
  imgAlt,
  description,
  linkUrl,
  linkLabel = 'Learn more',
  ...rest
}) => (
  <div className={`${className} grid lg:grid-cols-12 mb-g`} {...rest}>
    <div className={`border-t-6 pt-c border-brand lg:col-span-4`}>
      <h1 className="f-h3 mb-e">{title}</h1>
      <p className="f-b1 mb-e">{description}</p>
      <LinkPrimary className="f-b1 font-bold" to={linkUrl}>
        {linkLabel}
      </LinkPrimary>
    </div>

    <div
      className={`md-max:mb-b relative aspect-w-16 aspect-h-9 lg:col-span-8 ${
        reverse ? 'lg:order-first' : ''
      }`}
    >
      <img src={imgSrc} alt={imgAlt} className="object-cover w-full h-full" />
    </div>
  </div>
)

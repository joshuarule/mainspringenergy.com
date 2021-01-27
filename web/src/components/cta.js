import { LinkPrimary } from './Link'
import React from 'react'
import Img from 'gatsby-image'

import RichText from './RichText'

export default ({
  className = '',
  title,
  image,
  body,
  _rawBody,
  link,
  options,
  aspect,
  ...rest
}) => {
  let textAlign = 'items-center'
  if (options) {
    switch (options.textAlign) {
      case 'top':
        textAlign = 'items-start'
        break
      case 'bottom':
        textAlign = 'items-end'
        break
      default:
        break
    }
  }

  const imageColSize =
    options && options.size ? 'lg:col-span-8' : 'lg:col-span-6'
  const textColSize =
    options && options.size ? 'lg:col-span-4' : 'lg:col-span-6'

  return (
    <section
      {...rest}
      className={`cta 
        md:grid md:grid-cols-1 lg:grid-cols-12 mb-f lg:mb-g ${className}
        ${textAlign}
      `}
    >
      {/* 3/2 */}
      <div
        className={`cta-copy
          mb-e md:mb-f lg:mb-0
          ${options && options.border ? 'border-t-6 border-brand pt-c' : ''}
          ${textColSize}
        `}
      >
        <div className="md:max-w-prose lg:max-w-prose-50">
          <h2 className="f-h3 mb-e">{title}</h2>
          {body && (
            <RichText content={_rawBody} className="mb-d md:mb-e f-b1" />
          )}
          {link && link.path && (
            <LinkPrimary className="f-b1 font-bold" to={link.path}>
              {link.label}
            </LinkPrimary>
          )}
        </div>
      </div>

      {aspect === 'auto' ? (
        image && (
          <Img
            className={`
              w-full md-max:mb-b
              ${imageColSize}
              ${options && options.swap ? '' : 'lg:order-first'}
            `}
            fluid={image.src.asset.fluid}
            alt={image.alt}
          />
        )
      ) : (
        <div
          className={`md-max:mb-b relative aspect-w-16 aspect-h-9 
            ${options && options.swap ? '' : 'lg:order-first'}
            ${imageColSize}
            `}
        >
          {image && (
            <Img
              className="object-cover w-full h-full"
              style={{ position: 'absolute' }}
              fluid={image.src.asset.fluid}
              alt={image.alt}
            />
          )}
        </div>
      )}
    </section>
  )
}

export const CtaText = ({ url, children, ...rest }) => (
  <LinkPrimary {...rest} to={url}>
    {children}
  </LinkPrimary>
)

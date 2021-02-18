import { LinkPrimary } from './Link'
import React from 'react'
import Img from 'gatsby-image'
import slugify from 'slugify'

import RichText from './RichText'

const AddLinkToImage = ({ children, className = '', link }) => {
  if (!link) return <div className={className}>{children}</div>
  return (
    <div className={`${className} relative`}>
      {children}
      <Link to={link.path} className="absolute top-0 bottom-0 left-0 right-0">
        <span className="sr">{link.label}</span>
      </Link>
    </div>
  )
}

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
      id={title ? slugify(title) : 'cta'}
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
          {body && <RichText content={_rawBody} className="f-b1" />}
          {link && link.path && (
            <LinkPrimary className="f-b1 font-bold block mt-e" to={link.path}>
              {link.label}
            </LinkPrimary>
          )}
        </div>
      </div>

      {aspect === 'auto' ? (
        image && (
          <AddLinkToImage
            link={link}
            className={`
            w-full md-max:mb-b
            ${imageColSize}
            ${options && options.swap ? '' : 'lg:order-first'}
          `}
          >
            <Img fluid={image.src.asset.fluid} alt={image.alt} />
          </AddLinkToImage>
        )
      ) : (
        <AddLinkToImage
          link={link}
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
        </AddLinkToImage>
      )}
    </section>
  )
}

export const CtaText = ({ url, children, ...rest }) => (
  <LinkPrimary {...rest} to={url}>
    {children}
  </LinkPrimary>
)

import { LinkPrimary } from './link'
import React from 'react'
import Img from 'gatsby-image'

import RichText from './RichText'

export default ({
  className = '',
  title,
  image,
  body,
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
      className={`
        lg:grid lg:grid-cols-12 mb-g ${className}
        ${textAlign}
      `}
    >
      {/* 3/2 */}
      <div
        className={`
          ${options && options.border ? 'border-t-6 border-brand pt-c' : ''}
          ${textColSize}
          mb-e
        `}
      >
        <div className="md:max-w-prose lg:max-w-prose-50">
          <h2 className="f-h3 mb-e">{title}</h2>
          {body && <RichText content={body} className="mb-e" />}
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

// export const CtaThird = ({
//   className = '',
//   reverse = false,
//   title,
//   imgSrc,
//   imgAlt,
//   description,
//   linkUrl,
//   linkLabel = 'Learn more',
//   ...rest
// }) => (
//   <div className={`${className} grid lg:grid-cols-12 mb-g`} {...rest}>
//     <div className={`border-t-6 pt-c border-brand lg:col-span-4`}>
//       <h1 className="f-h3 mb-e">{title}</h1>
//       <p className="f-b1 mb-e">{description}</p>
//       <LinkPrimary className="f-b1 font-bold" to={linkUrl}>
//         {linkLabel}
//       </LinkPrimary>
//     </div>

//     <div
//       className={`md-max:mb-b relative aspect-w-16 aspect-h-9 lg:col-span-8 ${
//         reverse ? 'lg:order-first' : ''
//       }`}
//     >
//       <img src={imgSrc} alt={imgAlt} className="object-cover w-full h-full" />
//     </div>
//   </div>
// )

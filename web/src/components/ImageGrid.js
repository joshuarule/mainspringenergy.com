import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import RichText from './RichText'

const Container = ({ fullWidth, children, className }) => {
  return fullWidth ? (
    <div className={`w-edge ${className}`}>
      <figure>
        <div className={`container`}>{children[0]}</div>
        <div className="container">{children[1]}</div>
      </figure>
    </div>
  ) : (
    <figure className={className}>{children}</figure>
  )
}

export default function ImageGrid({
  images,
  columns,
  options,
  style = {},
  caption,
  className = '',
}) {
  if (!images || !images.length) return null
  let columnClass
  switch (columns) {
    case '4':
      columnClass = 'lg:grid-cols-4 md:grid-cols-2'
      break
    case '3':
      columnClass = 'lg:grid-cols-3 md:grid-cols-2'
      break
    default:
      columnClass = 'lg:grid-cols-2'
      break
  }
  return (
    <Container
      fullWidth={options && options.fullWidth}
      className={`imageGrid
        ${className}
        ${options && options.marginTop ? 'mt-f' : ''} 
        ${options && options.marginBottom ? 'mb-f' : ''}
      `}
      style={{ ...style }}
    >
      <div className={`md:grid ${columnClass} lg:gap-1 `}>
        {images.map((image, i) =>
          options.logos ? (
            <div
              key={`image-${i}`}
              className={`gridImage mb-e flex relative aspect-w-16 aspect-h-9 rounded-lg`}
              style={{ backgroundColor: 'rgba(0,0,0,.03)' }}
            >
              <Img
                className="w-full h-full"
                style={{
                  position: 'absolute',
                }}
                imgStyle={{
                  paddingTop: '2em',
                  paddingBottom: '2em',
                  paddingLeft: '2.5em',
                  paddingRight: '2.5em',
                  objectFit: 'contain',
                  objectPosition: '50% 50%',
                }}
                fluid={image.image.src.asset.fluid}
                alt={image.image.alt}
              />
            </div>
          ) : (
            <div
              key={`image-${i}`}
              className={`gridImage ${
                image.path ? 'gridImage--hasLink' : ''
              } overflow-hidden md-max:mb-b relative aspect-w-16 aspect-h-9`}
            >
              <Img
                className="object-cover w-full h-full"
                style={{ position: 'absolute' }}
                fluid={image.image.src.asset.fluid}
                alt={image.image.alt}
              />
              {image.title && (
                <div className="bg-gradient-to-t from-black-40 to-transparent absolute fill left-0 right-0 bottom-0 top-0">
                  <h3 className="absolute bottom-0 left-0 p-c text-white">
                    {image.title}
                  </h3>
                </div>
              )}
              {image.path && (
                <Link
                  to={image.path}
                  className="absolute left-0 right-0 bottom-0 top-0"
                />
              )}
            </div>
          )
        )}
      </div>

      {caption && (
        <figcaption className="mt-e lg:grid lg:grid-cols-12 w-full">
          <RichText
            className="text-smoke f-b2 col-start-4 col-span-6"
            content={caption.richText}
          />
        </figcaption>
      )}
    </Container>
  )
}

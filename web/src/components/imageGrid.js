import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function ImageGrid({
  images,
  columns,
  style = {},
  className = 'mb-g',
}) {
  if (!images || !images.length) return null
  let columnClass
  switch (columns) {
    case '4':
      columnClass = 'lg:grid-cols-4'
      break
    case '3':
      columnClass = 'lg:grid-cols-3'
      break
    default:
      columnClass = 'lg:grid-cols-2'
      break
  }
  return (
    <div
      className={`lg:grid ${columnClass} gap-1 ${className}`}
      style={{ ...style }}
    >
      {images.map((image, i) => (
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
      ))}
    </div>
  )
}

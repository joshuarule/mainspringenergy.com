import React from 'react'
import Img from 'gatsby-image'
import RichText from './RichText'

export default ({
  src,
  alt,
  className = '',
  caption,
  style = {},
  imgStyle = {},
  options,
}) => {
  return (
    <figure
      style={style}
      className={`${className} ${options && options.fullWidth ? 'w-edge' : ''}`}
    >
      <Img fluid={src.asset.fluid} alt={alt} imgStyle={imgStyle} />
      {caption && (
        <figcaption>
          <RichText
            className="mt-e text-smoke f-b2"
            content={caption.richText}
          />
        </figcaption>
      )}
    </figure>
  )
}

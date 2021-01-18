import React from 'react'
import Img from 'gatsby-image'
import RichText from './RichText'

export default ({ src, alt, className = '', caption, options }) => {
  console.log('figure', options)
  return (
    <figure
      className={`${className} ${options && options.fullWidth ? 'w-edge' : ''}`}
    >
      <Img fluid={src.asset.fluid} alt={alt} />
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

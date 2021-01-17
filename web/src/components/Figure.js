import React from 'react'
import Img from 'gatsby-image'
import RichText from './RichText'

export default ({ src, alt, className = '', caption }) => {
  return (
    <figure className={className}>
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

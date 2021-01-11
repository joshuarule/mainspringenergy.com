import React from 'react'
import Img from 'gatsby-image'

export default ({ src, alt, className = '' }) => {
  return (
    <figure className={className}>
      <Img fluid={src.asset.fluid} alt={alt} />
    </figure>
  )
}

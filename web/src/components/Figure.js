import React from 'react'
import Img from 'gatsby-image'

export default ({ src, alt }) => {
  return (
    <figure>
      <Img fluid={src.asset.fluid} alt={alt} />
    </figure>
  )
}

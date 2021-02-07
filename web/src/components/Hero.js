import React from 'react'
import Img from 'gatsby-image'

const Hero = ({ images, className = '' }) => {
  return (
    <div className={className}>
      {images && (
        <Img
          className={'absolute object-fit w-full h-full'}
          fluid={images[0].src.asset.fluid}
        />
      )}
    </div>
  )
}

export default Hero

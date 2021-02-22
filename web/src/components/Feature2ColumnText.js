import React from 'react'
import Img from 'gatsby-image'

export default function TextColumns({
  textCol1,
  textCol2,
  title,
  image,
  className = '',
}) {
  return (
    <section
      className={`feature2ColumnText grid md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      <div className="flex sm-only:mb-e md:pr-d">
        <Img
          className="w-full h-full"
          fluid={image.src.asset.fluid}
          alt={image.alt}
          imgStyle={{
            objectFit: 'contain',
            objectPosition: '50% 50%',
          }}
        />
      </div>
      <div className="lg:col-span-2">
        <h2 className="f-h3 mb-e">{title}</h2>
        <div className="lg:grid lg:grid-cols-2">
          <p className="text-steel f-b1 md-max:mb-d">{textCol1}</p>
          {textCol2 && <p className="text-steel f-b1">{textCol2}</p>}
        </div>
      </div>
    </section>
  )
}

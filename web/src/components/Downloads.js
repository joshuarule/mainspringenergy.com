import React from 'react'
import Img from 'gatsby-image'

import { LinkExtPrimary } from '../components/Link'

export default function Downloads({ items }) {
  return (
    <ul className="md:grid md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        if (!item?.src?.src) return null
        const downloadLink = `${item.src.src.asset.url}?dl=${item.src.src.asset.originalFilename}`
        return (
          <li key={`download-${i}`} className="mb-f">
            <div className="lg:grid lg:grid-cols-4">
              <a
                href={downloadLink}
                target="_blank"
                rel="noreferrer"
                className="lg:col-span-3 mb-d"
              >
                <Img fluid={item.image.src.asset.fluid} alt={item.image.alt} />
              </a>
            </div>

            <div className="col-span-4 col-start-1 lg:pr-e">
              <h4 className="f-b1 font-bold">{item.title}</h4>
              <p className="mb-d f-b1">{item.subtitle}</p>
              <p className="f-b1 text-steel mb-d">{item.description}</p>
              <LinkExtPrimary
                newTab
                href={downloadLink}
                className="f-b1 text-freshBlue hover:text-seaGreen font-medium"
                download
              >
                Download
              </LinkExtPrimary>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

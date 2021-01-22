import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Icon from './Icon'

export default function VisionIllustration() {
  const { illustration } = useStaticQuery(graphql`
    query IllustrationQuery {
      illustration: file(relativePath: { eq: "ms_vision_imageF.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="w-edge my-e">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-3 flex items-center justify-between">
            <ul className="f-h3 text-smoke">
              <li className="mb-c">Biogas</li>
              <li className="mb-c">Renewable Gas</li>
              <li className="mb-c">Green Hydrogren</li>
            </ul>
            <Icon
              name="chevron"
              width="36"
              height="72"
              className="text-smoke"
            />
          </div>
          <div className="col-span-6">
            <Img
              fluid={illustration.childImageSharp.fluid}
              alt={'Mainspring generator'}
            />
          </div>
          <div className="col-span-3">
            <div className="col-span-3 flex items-center justify-between">
              <Icon
                name="chevron"
                width="36"
                height="72"
                className="text-smoke"
              />
              <ul className="f-h3 text-smoke">
                <li className="mb-c">Buildings</li>
                <li className="mb-c">Grid Distribution</li>
                <li className="mb-c">Microgrids</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

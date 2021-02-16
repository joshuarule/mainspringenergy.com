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
    <div className="w-edge my-f">
      <div className="container">
        <div className="lg:grid lg:grid-cols-12">
          <div className="col-start-4 col-span-6 text-center md:text-left mb-e">
            <h4>Flexibility to Enable a Net-Zero Carbon Future</h4>
            <p className="text-steel">
              Renewable, Dispatchable, Resilient Capacity to Firm Solar and Wind
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 items-center md:items-start lg:items-center ">
          <div className="col-span-4 lg:col-span-3 flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between">
            <ul className="f-h3 font-heavy text-smoke text-center md:text-left">
              <li className="mb-c">Biogas</li>
              <li className="mb-c">Renewable Gas</li>
              <li className="mb-c">Green Hydrogren</li>
            </ul>
            <Icon
              name="chevronHeavy"
              width="72"
              height="36"
              className="text-smoke sm-only:my-d  transform md:-rotate-90 md:translate-y-2/4 lg:translate-y-0 flex-0 md:ml-d"
            />
          </div>
          <div className="col-span-4 lg:col-span-6">
            <Img
              fluid={illustration.childImageSharp.fluid}
              alt={'Mainspring generator'}
              className="my-c md:my-0"
            />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between">
              <Icon
                name="chevronHeavy"
                width="72"
                height="36"
                className="text-smoke sm-only:my-d transform md:-rotate-90 md:translate-y-2/4 lg:translate-y-0 flex-0 md:mr-d"
              />
              <ul className="f-h3 font-heavy text-smoke text-center md:text-left">
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

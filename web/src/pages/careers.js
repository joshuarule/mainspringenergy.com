import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'

import Layout from '../components/layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'
import RichText from '../components/RichText'
import { LinkPrimary } from '../components/Link'

export default ({ location }) => {
  const {
    sanityCareers: { seo, body, hero },
  } = useStaticQuery(graphql`
    query CareersQuery {
      sanityCareers {
        seo {
          ...seoFields
        }
        hero {
          title
          richText {
            _rawRichText
          }
          link {
            label
            path
          }
          gallery {
            images {
              alt
              src {
                asset {
                  fluid {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
        body {
          ...blocks
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="relative">
        <div
          className="container text-white flex flex-col justify-end"
          style={{ height: '85vh' }}
        >
          <div className="z-10 md:grid md:grid-cols-12 h-2/3 items-center">
            <div className="col-span-5">
              <h1 className="mb-e text-black">{hero.title}</h1>
              <RichText
                content={hero.richText._rawRichText}
                className="text-iron f-b1 mb-e"
              />
              <LinkPrimary
                to={hero.link.path}
                className="f-b1 font-bold"
                style={{ fontSize: '18px', letterSpacing: '0.6px' }}
              >
                {hero.link.label}
              </LinkPrimary>
            </div>
          </div>
          {/* Gallery min height 720 */}
          <div
            className="slider-container flex right-0 absolute p-f"
            style={{ height: '85vh', width: '85vh' }}
          >
            <Slider className="flex object-fit w-full h-full transform -rotate-45 translate-x-1/4 -translate-y-1/4">
              {hero.gallery.images.map((image, i) => {
                return (
                  <Img
                    key={image.alt}
                    className="object-fit w-full h-full"
                    fluid={image.src.asset.fluid}
                    alt={image.alt}
                  />
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container mb-f">
        <ContentBlocks blocks={body.blocks} />
      </div>
    </Layout>
  )
}

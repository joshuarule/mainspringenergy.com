import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/Seo'
import Cta from '../components/Cta'
import ContentBlocks from '../components/ContentBlocks'
import Layout from '../components/layout'
import { LinkPrimary } from '../components/Link'

const IndexPage = () => {
  const {
    sanityHome: { seo, hero, body, cta },
  } = useStaticQuery(graphql`
    query HomeQuery {
      sanityHome {
        hero {
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
          subtitle
          title
        }
        cta {
          ...ctaFields
        }
        body {
          ...blocks
        }
        seo {
          title
          description
          image {
            alt
            src {
              asset {
                fixed {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout navTheme="dark">
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="bg-navy">
        <div
          className="container text-white flex flex-col justify-center relative"
          style={{ height: '85vh' }}
        >
          <div className="flex-1"></div>
          <div className="relative z-10 flex-1">
            <h1 className="mb-e">{hero.title}</h1>
            <LinkPrimary
              to={hero.link.path}
              className="f-b1 font-bold link--light"
            >
              {hero.link.label}
            </LinkPrimary>
          </div>
          {/* Gallery min height 720 */}
          <Img
            className="-right-1/4 bottom-1/4 w-2/3 transform -rotate-45"
            style={{ position: 'absolute' }}
            fluid={hero.gallery.images[0].src.asset.fluid}
            alt={hero.gallery.images[0].alt}
          />
        </div>
      </div>
      <Cta className="-mt-f mb-g container" {...cta} />
      <div className="container">
        <ContentBlocks blocks={body.blocks} />
      </div>
    </Layout>
  )
}

export default IndexPage

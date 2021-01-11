import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'

const Hero = ({ images, title, subtitle, link, className = '' }) => {
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

export default () => {
  const {
    sanityVision: { seo, hero, title, contentBlocks },
  } = useStaticQuery(graphql`
    query VisionQuery {
      sanityVision {
        title
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
        contentBlocks {
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
      <Hero images={hero.gallery.images} className={'h-screen-50 mb-f'} />
      <div className="container w-1/2" style={{ maxWidth: '960px' }}>
        <h2 className="mb-e border-t-6 border-brand pt-c">{title}</h2>
        <ContentBlocks blocks={contentBlocks.blocks} />
      </div>
    </Layout>
  )
}

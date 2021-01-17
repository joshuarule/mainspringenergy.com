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
    sanityVision: { seo, hero, title, contentBlocks, vision_sources },
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
                  fluid(maxWidth: 2000) {
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
        vision_sources {
          title
          sourceList
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
      <div className="container lg:grid lg:grid-cols-12 mb-f">
        <div className="col-start-4 col-span-6">
          <h2 className="mb-e border-t-6 border-brand pt-c">{title}</h2>
          <ContentBlocks blocks={contentBlocks.blocks} />
          {vision_sources && (
            <div className="richText border-t-2 pt-2 mt-f f-b2">
              <h5>{vision_sources.title}</h5>
              <ol>
                {vision_sources.sourceList.map(item => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

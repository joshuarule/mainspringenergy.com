import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'

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

export default ({ location }) => {
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
          sourceList {
            title
            url
          }
        }
        seo {
          ...seoFields
        }
      }
    }
  `)

  return (
    <Layout navTheme="dark" location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <Hero images={hero.gallery.images} className={'h-screen-50 mb-f'} />
      <div className="container lg:grid lg:grid-cols-12 mb-f">
        <div className="col-start-4 col-span-6">
          <h2 className="mb-e border-t-6 border-brand pt-c">{title}</h2>
          <ContentBlocks blocks={contentBlocks.blocks} />
          {vision_sources && (
            <div className="richText border-t border-smoke pt-2 mt-f f-b2">
              <h5>{vision_sources.title}</h5>
              <ol>
                {vision_sources.sourceList.map(item => (
                  <li>
                    {item.title}
                    {item.url && (
                      <a href={item.url} className="f-b2 ml-a text-seaGreen">
                        More Info
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

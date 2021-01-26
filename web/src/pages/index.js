import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'

import SEO from '../components/SEO'
import Cta from '../components/Cta'
import ContentBlocks from '../components/ContentBlocks'
import Layout from '../components/Layout'
import { LinkPrimary } from '../components/Link'

const IndexPage = ({ location }) => {
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
          ...seoFields
        }
      }
    }
  `)

  const settings = {
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipe: false,
    fade: true,
  }

  return (
    <Layout navTheme="dark" location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="bg-navy relative">
        <div className="hero container text-white flex flex-col justify-end">
          <div className="z-10 md:grid md:grid-cols-3 lg:grid-cols-2 mb-e h-1/3 md:h-3/5 md:items-center">
            <div className="md:col-span-2 lg:col-span-1">
              <h1 className="mb-e">{hero.title}</h1>
              <LinkPrimary
                to={hero.link.path}
                className="f-b1 font-bold link--light"
                style={{ fontSize: '18px', letterSpacing: '0.6px' }}
              >
                {hero.link.label}
              </LinkPrimary>
            </div>
          </div>
          {/* Gallery min height 720 */}
        </div>
        <div className="slider--diamond slider-container">
          <Slider {...settings} className="flex object-fit w-full h-full">
            {hero.gallery.images.map(image => {
              return (
                <Img
                  key={image.alt}
                  // className="object-fit w-full h-full"
                  fluid={image.src.asset.fluid}
                  alt={image.alt}
                />
              )
            })}
          </Slider>
        </div>
      </div>
      <Cta aspect="auto" className="home-cta -mt-f mb-g container" {...cta} />
      <div className="container">
        <ContentBlocks blocks={body.blocks} />
      </div>
    </Layout>
  )
}

export default IndexPage

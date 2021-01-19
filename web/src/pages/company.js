import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/Seo'

export default ({ location }) => {
  const {
    sanityCompany: {
      seo,
      hero,
    },
  } = useStaticQuery(graphql`
    query CompanyQuery {
      sanityCompany {
        seo {
          ...seoFields
        }
        hero {
          heroImage {
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
    }
  `)
  console.log(hero)
  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      {/* image in, but needs to be below header */}
      <Img
        className="container"
        fluid={hero.heroImage.src.asset.fluid}
        alt={hero.heroImage.alt}
      />
    </Layout>
  )
}





// TODO: take a look at heroImage..is there going to be more than 1???

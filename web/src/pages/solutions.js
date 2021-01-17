import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'
import SectionTitle from '../components/SectionTitle'

export default () => {
  const {
    sanitySolutions: { seo, hero, body, solutions_primary },
  } = useStaticQuery(graphql`
    query SolutionsQuery {
      sanitySolutions {
        seo {
          ...seoFields
        }
        hero {
          title
          subtitle
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
        solutions_primary {
          title {
            title
            subtitle
            col_1
            col_2
            border
            link {
              label
              path
            }
          }
          body {
            ...blocks
          }
        }
        body {
          ...blocks
        }
      }
    }
  `)
  console.log(seo)
  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container mb-g">
        <h1 className="mb-e">{hero.title}</h1>
        <p className="mb-e">{hero.subtitle}</p>
        <div>
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
        </div>
      </div>
      {/* solutions_primary */}
      <div className="bg-navy py-e">
        <div className="container">
          <SectionTitle
            {...solutions_primary.title}
            className="mt-0 mb-e text-white"
          />
          <ContentBlocks blocks={solutions_primary.body.blocks} />
        </div>
      </div>

      <div className="container">
        <ContentBlocks blocks={body.blocks} />
      </div>
    </Layout>
  )
}

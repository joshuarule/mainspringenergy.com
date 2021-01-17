import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'

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
console.log(seo);
  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div>
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
        {/* solutions_primary */}
        <div className="container">
          <ContentBlocks blocks={body.blocks} />
        </div>
      </div>
    </Layout>
  )
}

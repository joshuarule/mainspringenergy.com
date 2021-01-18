import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'
import SectionTitle from '../components/SectionTitle'
import { LinkPrimary } from '../components/Link'

export default ({ location }) => {
  const {
    sanitySolutions: {
      seo,
      hero,
      body,
      solutions_primary,
      solutions_specs,
      solutions_specs_media,
    },
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
        solutions_specs {
          title
          subtitle
          solutions_specs_media {
            title
            description
            specs
            image {
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
          list {
            items {
              title
              subtitle
            }
          }
        }
        solutions_downloads {
          items {
            image {
              alt
            }
            description
            subtitle
            title
          }
          title
        }
      }
    }
  `)

  console.log(body.blocks)
  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container mb-g">
        <div className={`lg:grid lg:grid-cols-2 mb-g lg:mt-g items-center`}>
          <div className={`md-max:mb-b relative aspect-w-3 aspect-h-2 `}>
            {hero.gallery && hero.gallery.images[0] && (
              <Img
                className="object-cover w-full h-full"
                style={{ position: 'absolute' }}
                fluid={hero.gallery.images[0].src.asset.fluid}
                alt={hero.gallery.images[0].alt}
              />
            )}
          </div>
          <div className={`mb-e lg:mb-0`}>
            <div className="md:max-w-prose">
              <h2 className="f-h2 mb-e">{hero.title}</h2>
              {hero.subtitle && (
                <p className="lg:max-w-prose-50 f-b1">{hero.subtitle}</p>
              )}
              {hero.link && hero.link.path && (
                <LinkPrimary className="f-b1 font-bold" to={hero.link.path}>
                  {hero.link.label}
                </LinkPrimary>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* solutions_primary */}
      <div className="bg-navy py-e theme--dark">
        <div className="container">
          <SectionTitle {...solutions_primary.title} className="mt-0 mb-e" />
          <ContentBlocks blocks={solutions_primary.body.blocks} />
        </div>
      </div>

      <div className="container">
        <ContentBlocks blocks={body.blocks} />
      </div>
      <div className="container">
        <h1>{solutions_specs.title}</h1>
        <p>{solutions_specs.subtitle}</p> {/* not showing up */}
        <h1>{solutions_specs.solutions_specs_media.title}</h1>
      </div>
    </Layout>
  )
}

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContentBlocks from '../components/ContentBlocks'
import SectionTitle from '../components/SectionTitle'
import { LinkExtPrimary, LinkPrimary } from '../components/Link'
import RichText from '../components/RichText'
import CustomerInquiry from '../components/CustomerInquiry'

export default ({ location }) => {
  const {
    sanitySolutions: {
      seo,
      hero,
      body,
      solutions_primary,
      solutions_specs,
      solutions_downloads,
      solutions_form,
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
                  url
                }
              }
            }
          }
          list {
            items {
              title
              subtitle
              _rawBody
            }
          }
        }
        solutions_downloads {
          title
          items {
            description
            subtitle
            title
            image {
              alt
              src {
                asset {
                  fluid(maxWidth: 1600) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
            src {
              src {
                asset {
                  url
                }
              }
            }
          }
        }
        solutions_form {
          title
          subtitle
          col_1
          col_2
          border
          options {
            smallTitleSize
            border
          }
        }
      }
    }
  `)

  return (
    <Layout location={location} className="lg:pt-e">
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container pb-g pt-g">
        <div
          className={`lg:grid lg:grid-cols-2 mb-f lg:mb-g mt-g items-center`}
        >
          <div className={`md-max:mb-e relative aspect-w-3 aspect-h-2 `}>
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
      <div className="bg-navy py-e theme--dark mb-e">
        <div className="container">
          <SectionTitle {...solutions_primary.title} className="mt-0 mb-e" />
          <ContentBlocks blocks={solutions_primary.body.blocks} />
        </div>
      </div>

      <div className="container">
        <ContentBlocks blocks={body.blocks} />
      </div>
      <section className="bg-footerBg py-e mb-e" id="specs">
        <div className="container">
          <div className="mb-e">
            <h1 className="f-h2 mb-e">{solutions_specs.title}</h1>
            <p className="f-b1 font-regular">{solutions_specs.subtitle}</p>
          </div>
          <div className="lg:grid lg:grid-cols-3 mb-g lg:pb-g text-seaGreen items-center">
            <div className="lg:pr-f">
              <h1 className="f-h3 mb-e md:max-w-sm lg:max-w-full">
                {solutions_specs.solutions_specs_media.title}
              </h1>
              <div className="md:grid md:grid-cols-2 lg:block">
                <ul className="mb-f lg:mb-g">
                  {solutions_specs.solutions_specs_media.specs.map(
                    (spec, i) => (
                      <p key={`spec-${i}`} className="f-h3 font-thin mb-a">
                        {spec}
                      </p>
                    )
                  )}
                </ul>
                <p className="md-max:mb-f f-b1">
                  {solutions_specs.solutions_specs_media.description}
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <img
                src={solutions_specs.solutions_specs_media.image.src.asset.url}
                alt={solutions_specs.solutions_specs_media.image.alt}
              />
            </div>
          </div>
          <div>
            <ul className="md:grid md:grid-cols-2 lg:grid-cols-6">
              {solutions_specs.list.items.map((item, i) => (
                <li
                  key={`spec-list-${i}`}
                  className="border-t-6 border-steel pt-a"
                  style={{ minHeight: '132px' }}
                >
                  <h5 className="f-b1 font-bold">{item.title}</h5>
                  <RichText content={item._rawBody} className="text-steel" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* specs_downloads */}
      <div className="container mb-f">
        <SectionTitle title={solutions_downloads.title} />
        <ul className="md:grid md:grid-cols-2 lg:grid-cols-3">
          {solutions_downloads.items.map((item, i) => (
            <li key={`download-${i}`} className="mb-f">
              <div className="lg:grid lg:grid-cols-4">
                <div className="lg:col-span-3 mb-d">
                  <Img
                    fluid={item.image.src.asset.fluid}
                    alt={item.image.alt}
                  />
                </div>
              </div>

              <div className="col-span-4 col-start-1 lg:pr-e">
                <h4 className="f-b1 font-bold">{item.title}</h4>
                <p className="mb-d f-b1">{item.subtitle}</p>
                <p className="f-b1 text-steel mb-d">{item.description}</p>
                <LinkExtPrimary
                  href={item.src.src.asset.url}
                  className="f-b1 text-freshBlue font-medium"
                  target="_blank"
                  download="filename"
                >
                  Download
                </LinkExtPrimary>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="customer-inquiries" className="container mb-g md:mb-f">
        <SectionTitle {...solutions_form} />
        <CustomerInquiry />
      </div>
    </Layout>
  )
}

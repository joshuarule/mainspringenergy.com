import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'
import SectionTitle from '../components/SectionTitle'
import { LinkPrimary } from '../components/Link'
import RichText from '../components/RichText'

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
                  fluid {
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
      <section className="bg-footerBg py-e">
        <div className="container">
          <div className="mb-f">
            <h1 className="f-h2 ">{solutions_specs.title}</h1>
            <p className="f-b1 ">{solutions_specs.subtitle}</p>
          </div>
          <div className="grid grid-cols-3 mb-g text-seaGreen items-center">
            <div>
              <h1 className="f-h3 mb-e">
                {solutions_specs.solutions_specs_media.title}
              </h1>
              <ul className="mb-g">
                {solutions_specs.solutions_specs_media.specs.map(spec => (
                  <p className="f-h3 font-thin">{spec}</p>
                ))}
              </ul>
              <p>{solutions_specs.solutions_specs_media.description}</p>
            </div>
            <div className="lg:col-span-2">
              <Img
                fluid={
                  solutions_specs.solutions_specs_media.image.src.asset.fluid
                }
                alt={solutions_specs.solutions_specs_media.alt}
              />
            </div>
          </div>
          <div>
            <ul className="lg:grid lg:grid-cols-6">
              {solutions_specs.list.items.map(item => (
                <li className="border-t-6 border-steel pt-a">
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
        <SectionTitle title={solutions_downloads.title} className="mb-f" />
        <ul className="lg:grid lg:grid-cols-3">
          {solutions_downloads.items.map(item => (
            <li className="mb-d">
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
                <LinkPrimary
                  to={item.src.src.asset.url}
                  className="f-b1 text-freshBlue"
                  target="_blank"
                >
                  Download
                </LinkPrimary>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <SectionTitle {...solutions_form} className="mt-0 mb-e" />
        <form action="submit" className="lg:grid lg:grid-cols-3 mb-g">
          <div className="col-start-2 col-span-2 lg:grid lg:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block mb-a font-bold">
                First Name
              </label>
              <input type="text" className="input mb-d" />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-a font-bold">
                Last Name
              </label>
              <input type="text" className="input mb-d" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-a font-bold">
                Email
              </label>
              <input type="email" className="input mb-d" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-a font-bold">
                Phone (optional)
              </label>
              <input type="tel" className="input mb-d" />
            </div>
            <div>
              <label htmlFor="company" className="block mb-a font-bold">
                Company
              </label>
              <input type="text" className="input mb-d" />
            </div>
            <div>
              <label htmlFor="jobTitle" className="block mb-a font-bold">
                Title
              </label>
              <input type="text" className="input mb-d" />
            </div>
            <div>
              <label htmlFor="peakDemand" className="block mb-a font-bold">
                Facility Peak Demand (kW)
              </label>
              <input type="text" className="input mb-d" />
              {/* <select name="peakDemand" id="peakDemand">
                <option value="200">200</option>
                <option value="200">300</option>
                <option value="200">400</option>
              </select> */}
            </div>
            <div>
              <label htmlFor="annualEnergy" className="block mb-a font-bold">
                Facility Annual Energy (kWh)
              </label>
              <input type="text" className="input mb-d" />
            </div>
            <div className="lg:col-span-2 mb-d">
              <label htmlFor="message" className="block mb-a font-bold">
                Message
              </label>
              <textarea
                style={{ resize: 'none' }}
                rows="5"
                className="input"
              ></textarea>
            </div>
            <div>
              <button
                style={{ color: '#fff', paddingTop: '13px' }}
                className="bg-seaGreen f-b1 pb-c px-f rounded-md flex items-center hover:bg-seaGreenDark"
                onCLick={e => {
                  e.preventDefault()
                  alert('send form')
                }}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

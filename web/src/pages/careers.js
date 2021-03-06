import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import { parseCategories } from '../components/JobCategories'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContentBlocks from '../components/ContentBlocks'
import RichText from '../components/RichText'
import { LinkPrimary } from '../components/Link'
import SectionTitle from '../components/SectionTitle'
import ImageGrid from '../components/ImageGrid'

export default ({ location }) => {
  const {
    sanityCareers: { seo, body, hero, secondarySection },
  } = useStaticQuery(graphql`
    query CareersQuery {
      sanityCareers {
        seo {
          ...seoFields
        }
        hero {
          title
          richText {
            _rawRichText
          }
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
        }
        body {
          ...blocks
        }
        secondarySection {
          imageGrid {
            ...imageGridFields
          }
          _rawDescription
          title
          link {
            label
            path
          }
        }
      }
    }
  `)

  const [categories, setCategories] = useState(false)

  useEffect(() => {
    let jobsData
    fetch('/.netlify/functions/jobs')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        jobsData = data
        const parsedCategories = parseCategories(jobsData)
        setCategories(parsedCategories)
      })
  }, [])

  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="relative mb-g md:mb-f lg:mb-0">
        <div className="hero container text-white flex flex-col justify-end">
          <div className="z-10 grid md:grid-cols-12 h-full items-end">
            <div className="md:col-span-8 lg:col-span-5 md:mb-e lg:mb-g">
              <h1 className="mb-e text-charcoal">{hero.title}</h1>
              <RichText
                content={hero.richText._rawRichText}
                className="text-steel f-b1 mb-e"
              />
              <LinkPrimary to={hero.link.path} className="f-b1 font-medium">
                {hero.link.label}
              </LinkPrimary>
            </div>
          </div>
          {/* Gallery min height 720 */}
          <div className="slider--diamond slider-container">
            <Slider className="flex object-fit w-full h-full">
              {hero.gallery.images.map((image, i) => {
                return (
                  <Img
                    key={image.alt}
                    fluid={image.src.asset.fluid}
                    alt={image.alt}
                  />
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container mb-f">
        <ContentBlocks blocks={body.blocks} />
      </div>
      <section className="container mb-f">
        <SectionTitle
          title={secondarySection.title}
          options={{ border: true, smallTitleSize: true }}
          className="border-seaGreen"
        />
        <div className="md:grid md:grid-cols-3">
          <ImageGrid
            {...secondarySection.imageGrid}
            className="md:col-span-2"
            gridClasses="gap-b"
          />
          <div>
            <RichText
              content={secondarySection._rawDescription.richText}
              className="f-b1 text-steel mb-d"
            />
            <div className="select mb-d lg:w-2/3">
              <select
                onChange={e => {
                  navigate(`/roles?category=${e.target.value}`)
                }}
              >
                <option value="none">Select a category</option>
                {categories &&
                  Object.keys(categories).map(key => (
                    <option key={key} value={key}>
                      {categories[key].name}
                    </option>
                  ))}
              </select>
            </div>
            <LinkPrimary
              to={secondarySection.link.path}
              className="block font-medium"
            >
              {secondarySection.link.label}
            </LinkPrimary>
          </div>
        </div>
      </section>
    </Layout>
  )
}

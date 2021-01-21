import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'
import SectionTitle from '../components/SectionTitle'

export default ({ location }) => {
  const {
    people,
    types,
    sanityCompany: { seo, hero, body },
  } = useStaticQuery(graphql`
    query CompanyQuery {
      types: allSanityPersonTypes {
        nodes {
          type
        }
      }
      people: allSanityPerson {
        nodes {
          name
          image {
            alt
            hotspot {
              x
              y
            }
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          _rawText
        }
      }
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
        body {
          ...blocks
        }
      }
    }
  `)
  const [activeProfile, setActiveProfile] = useState(false)

  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      {/* image in, but needs to be below header */}
      <Img
        className="container mt-g"
        fluid={hero.heroImage.src.asset.fluid}
        alt={hero.heroImage.alt}
      />
      <div className="bg-navy">
        <div className="container">
          <ContentBlocks blocks={body.blocks} />
        </div>
      </div>
      <div className="container">
        <SectionTitle title="Leadership" />
        {/* filter */}
        <nav>
          <ul class="flex my-f">
            {types.nodes.map(type => (
              <li className="mr-e f-b1 border-b-5 border-brand pb-a ">
                {type.type}
              </li>
            ))}
          </ul>
        </nav>
        <ul className="grid grid-cols-4">
          {/* filter people by category */}
          <Profile person={people.nodes[2]} />
          {people.nodes.map((person, i) => {
            let positionStyles = {}
            if (person.image.hotspot) {
              positionStyles = {
                objectPosition: `${person.image.hotspot.x * 100}% ${
                  person.image.hotspot.y * 100
                }%`,
              }
            }
            return (
              <li className={`person mb-f relative order-${i}`}>
                <div style={{ maxWidth: '211px' }}>
                  <div className="aspect-h-1 aspect-w-1 relative rounded-full overflow-hidden mb-d">
                    <Img
                      fluid={person.image.asset.fluid}
                      style={{
                        position: 'absolute',
                      }}
                      imgStyle={{
                        height: 'auto',
                        ...positionStyles,
                      }}
                      className="absolute"
                    />
                  </div>
                </div>
                <h4>{person.name}</h4>
                <p className="f-b1">{person.title}</p>
                <button
                  onClick={() => console.log(person)}
                  className="absolute block w-full top-0 right-0 bottom-0 left-0 border-2"
                >
                  open
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="container">
        <SectionTitle title="Contact" />
        {/* this info / images gets quried from the sanitySettings */}
      </div>
    </Layout>
  )
}

const Profile = ({ person }) => {
  let positionStyles = {}
  if (person.image.hotspot) {
    positionStyles = {
      objectPosition: `${person.image.hotspot.x * 100}% ${
        person.image.hotspot.y * 100
      }%`,
    }
  }
  return (
    <div className="col-span-4 order-0 bg-tan w-edge">
      <div className="container grid grid-cols-2">
        <div className="aspect-h-1 aspect-w-1 relative mb-d">
          <Img
            fluid={person.image.asset.fluid}
            style={{
              position: 'absolute',
            }}
            imgStyle={{
              height: 'auto',
              ...positionStyles,
            }}
            className="absolute"
          />
        </div>
      </div>
    </div>
  )
}

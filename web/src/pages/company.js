import React, { useState, useRef, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'
import SectionTitle from '../components/SectionTitle'
import ImageGrid from '../components/ImageGrid'
import RichText from '../components/RichText'

export default ({ location }) => {
  const {
    people,
    types,
    sanityCompany: { seo, hero, body, investors },
    sanitySettings: { map, satellite, email, address },
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
          personCategories {
            type
          }
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
      sanitySettings {
        email
        address {
          city
          state
          street
          street2
          zip
        }
        map {
          alt
          src {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        satellite {
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
        investors {
          title
          logos {
            columns
            options {
              logos
            }
            images {
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
          }
        }
      }
    }
  `)
  const [activeProfile, setActiveProfile] = useState(false)
  const profileRef = useRef()

  useEffect(() => {
    console.log(profileRef)
    if (activeProfile && profileRef.current) {
      profileRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
    console.log('useEffect')
  }, [activeProfile, profileRef])

  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
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
          <ul class="flex my-f border-b border-smoke">
            {types.nodes.map(type => (
              <li className="mr-e f-b1 border-b-5 border-brand pb-a ">
                {type.type}
              </li>
            ))}
          </ul>
        </nav>
        <ul className="grid grid-cols-4">
          {activeProfile && (
            <Profile
              forwardRef={profileRef}
              person={activeProfile.person}
              index={activeProfile.index}
              onClose={() => setActiveProfile(false)}
            />
          )}
          {people.nodes
            .filter(person =>
              person.personCategories
                .map(category => category.type)
                .find(category => category === 'Executive Team')
            )
            .map((person, i) => {
              let positionStyles = {}
              if (person.image.hotspot) {
                positionStyles = {
                  objectPosition: `${person.image.hotspot.x * 100}% ${
                    person.image.hotspot.y * 100
                  }%`,
                }
              }
              return (
                <li
                  className={`person mb-f relative order-${i} ${
                    activeProfile.index === i ? 'opacity-20' : ''
                  }`}
                >
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
                        className={`absolute`}
                      />
                    </div>
                  </div>
                  <h4>{person.name}</h4>
                  <p className="f-b1">{person.title}</p>
                  <button
                    onClick={() => setActiveProfile({ person, index: i })}
                    className="absolute block w-full top-0 right-0 bottom-0 left-0"
                  ></button>
                </li>
              )
            })}
        </ul>
      </div>
      <div className="bg-footerBg">
        <div className="container pt-e pb-g">
          <h1 className="mb-e">{investors.title}</h1>
          <ImageGrid {...investors.logos} />
        </div>
      </div>
      <div className="container">
        <SectionTitle title="Contact" />
        <p>{email}</p>
        <br />
        <p>{address.street}</p>
        <p>{[address.city, ', ', address.state, ' ', address.zip]}</p>
        <Img fluid={map.src.asset.fluid} alt={map.alt} />
        <Img fluid={satellite.src.asset.fluid} alt={satellite.alt} />
      </div>
    </Layout>
  )
}

const Profile = ({ person, index, onClose, forwardRef }) => {
  // Math Option
  // console.log(Math.floor(index / 4) * 4)
  let positionStyles = {}
  if (person.image.hotspot) {
    positionStyles = {
      objectPosition: `${person.image.hotspot.x * 100}% ${
        person.image.hotspot.y * 100
      }%`,
    }
  }
  return (
    <div
      ref={forwardRef}
      style={{ height: '500px' }}
      className={`col-span-4 order-0 w-edge bg-footerBg mb-f`}
    >
      <div className="container grid grid-cols-12 relative py-f">
        <div className="col-start-3 col-span-3">
          <div className="aspect-h-1 aspect-w-1 relative mb-d mr-e">
            <Img
              fluid={person.image.asset.fluid}
              style={{ position: 'absolute' }}
              imgStyle={{
                height: 'auto',
                ...positionStyles,
              }}
              className="absolute"
            />
          </div>
        </div>
        <div className="col-span-5">
          <h2 className="f-h3 mb-b">{person.name}</h2>
          <p className="mb-e">{person.title}</p>
          <RichText content={person._rawText} className="f-b1" />
        </div>
        <div className="relative col-span-2">
          <button className="absolute top-0 right-0" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

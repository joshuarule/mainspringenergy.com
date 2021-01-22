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
          title
          textCol1
          textCol2
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
  const [activeFilter, setActiveFilter] = useState(types.nodes[0].type)
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
      <div className="container mb-g lg:pt-f">
        <div className={`mb-g lg:mt-g items-center`}>
          <div className={`lg:mb-f relative lg:mx-f`}>
            {hero.heroImage && (
              <Img
                className="container mt-g"
                fluid={hero.heroImage.src.asset.fluid}
                alt={hero.heroImage.alt}
              />
            )}
          </div>
          <div className={`mb-e lg:mb-0 lg:grid lg:grid-cols-12`}>
            <div className="col-start-4 col-span-8">
              <div className="max-prose-50 pr-g">
                <h2 className="f-h2 mb-e">{hero.title}</h2>
              </div>
              <div className="lg:grid lg:grid-cols-2 text-iron">
                <p className="f-b1">{hero.textCol1}</p>
                <p className="f-b1">{hero.textCol2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy theme--dark pt-e pb-e">
        <div className="container">
          <ContentBlocks blocks={body.blocks} />
        </div>
      </div>
      <div className="container" ref={profileRef}>
        <SectionTitle title="Leadership" />
        <nav>
          <ul class="flex my-f border-b border-smoke">
            {types.nodes.map(type => (
              <li
                className={`mr-e f-b1 border-b-5 pb-a ${
                  activeFilter === type.type
                    ? 'border-brand'
                    : 'border-transparent'
                }`}
              >
                <button
                  onClick={() => {
                    setActiveFilter(type.type)
                    setActiveProfile(false)
                  }}
                >
                  {type.type}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="grid grid-cols-4">
          {activeProfile && (
            <Profile
              person={activeProfile.person}
              index={activeProfile.index}
              onClose={() => setActiveProfile(false)}
            />
          )}
          {people.nodes
            .filter(person =>
              person.personCategories
                .map(category => category.type)
                .find(category => category === activeFilter)
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
      <div id="contact" className="container lg:grid lg:grid-cols-3 my-g">
        <div>
          <SectionTitle
            title="Contact"
            border={true}
            options={{ topMargin: true, bottomMargin: true }}
            className="mb-d"
          />
          <p className="f-b1 mb-d">
            <a className="text-iron" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
          <p className="f-b1 text-iron">{address.street}</p>
          <p className="f-b1 text-iron">
            {[address.city, ', ', address.state, ' ', address.zip]}
          </p>
        </div>
        <Img fluid={map.src.asset.fluid} alt={map.alt} />
        <Img fluid={satellite.src.asset.fluid} alt={satellite.alt} />
      </div>
    </Layout>
  )
}

const Profile = ({ person, onClose }) => {
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

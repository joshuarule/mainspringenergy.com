import React, { useState, useRef, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContentBlocks from '../components/ContentBlocks'
import SectionTitle from '../components/SectionTitle'
import ImageGrid from '../components/ImageGrid'
import RichText from '../components/RichText'
import { LinkExtPrimary } from '../components/Link'

export default ({ location }) => {
  const {
    people,
    types,
    articles,
    sanityCompany: { seo, hero, body, investors },
    sanitySettings: { map, satellite, email, address },
  } = useStaticQuery(graphql`
    query CompanyQuery {
      types: allSanityPersonTypes(sort: { fields: order }) {
        nodes {
          type
          order
        }
      }
      people: allSanityPerson(sort: { fields: order }) {
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
      articles: allSanityArticles(sort: { fields: date }) {
        nodes {
          date(formatString: "MMMM Do, YYYY")
          url
          title
          image {
            src {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            alt
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
  const profileRef = useRef()

  // scroll on profile change
  useEffect(() => {
    if (activeProfile && profileRef.current) {
      profileRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [activeProfile, profileRef])

  // creates object of arrays for people
  const peopleByCategory = {}
  people.nodes.forEach(person =>
    person.personCategories.forEach(category => {
      if (!peopleByCategory[category.type]) {
        peopleByCategory[category.type] = []
      }
      peopleByCategory[category.type].push(person)
    })
  )

  const [activeFilter, setActiveFilter] = useState(
    Object.keys(peopleByCategory)[0]
  )

  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container">
        <div className="mb-g lg:pt-f">
          {hero.heroImage && (
            <div className="lg:mb-f lg:mx-f`">
              <Img
                className="mt-g"
                fluid={hero.heroImage.src.asset.fluid}
                alt={hero.heroImage.alt}
              />
            </div>
          )}
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

      <div id="core-values" className="bg-navy theme--dark pt-e pb-e">
        <div className="container">
          <ContentBlocks blocks={body.blocks} />
        </div>
      </div>

      {/* Recent News */}
      <div id="recent-news" className="bg-footerBg pt-f pb-e">
        <div className="container">
          <SectionTitle
            title="Recent News"
            className="mt-0 mb-d"
            options={{ bottomMargin: true, topMargin: true }}
          />
          {articles && (
            <div className="lg:grid grid-cols-2">
              {articles.nodes.map(article => (
                <aside className="mb-d md:flex">
                  <div className="flex-1">
                    <div
                      className={`md-max:mb-b mr-d relative aspect-w-16 aspect-h-9`}
                    >
                      <Img
                        style={{ position: 'absolute' }}
                        fluid={article.image.src.asset.fluid}
                        alt={article.image.alt}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <datetime className="text-steel">{article.date}</datetime>
                    <h1 className="f-b1 text-iron mb-e">{article.title}</h1>
                    <LinkExtPrimary
                      href={article.url}
                      newTab={true}
                      className="text-seaGreen"
                    >
                      Read press release
                    </LinkExtPrimary>
                  </div>
                </aside>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="container" ref={profileRef}>
        <SectionTitle title="Leadership" />
        <nav className="border-b border-smoke my-f">
          <ul class="flex">
            {types.nodes
              .filter(type => {
                return peopleByCategory[type.type]
              })
              .map(type => (
                <li
                  style={{ marginBottom: '-1px' }}
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

          {peopleByCategory[activeFilter].map((person, i) => {
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
                >
                  <span className="sr">view profile</span>
                </button>
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

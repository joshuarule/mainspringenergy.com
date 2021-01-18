import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import ReactPlayer from 'react-player'

import SEO from '../components/Seo'
import Layout from '../components/layout.js'
import { LinkPrimary } from '../components/Link.js'
import List from '../components/List.js'
import ContentBlocks from '../components/ContentBlocks'
import heroVideomp4 from '../assets/video/Mainspring_2020_Overview_Final_720p_compressed.mp4'
import heroVideowebm from '../assets/video/Mainspring_2020_Overview_Final_720p_compressed.webm'
import Icon from '../components/Icon'

export default ({ location }) => {
  const {
    sanityTechnology: { seo, primarySection, body, heroVideo },
    heroTop,
    heroBottom,
  } = useStaticQuery(graphql`
    query TechnologyQuery {
      heroTop: file(relativePath: { eq: "ms_tech_hero--top.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      heroBottom: file(relativePath: { eq: "ms_tech_hero--bottom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sanityTechnology {
        heroVideo {
          posterImage {
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
        primarySection {
          title
          subtitle
          link {
            path
            label
          }
          list {
            items {
              ...listFields
            }
          }
        }
        body {
          ...blocks
        }
        seo {
          ...seoFields
        }
      }
    }
  `)

  const [isPlaying, togglePlayback] = useState(false)

  const handlePlayPause = () => {
    togglePlayback(!isPlaying)
  }

  return (
    <Layout navTheme="dark" location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div
        className="bg-gradient-to-t from-techGradientFrom to-techGradientTo relative"
        style={{ minHeight: '800px', height: '75vh' }}
      >
        {/* noise */}
        <div
          className="absolute left-0 right-0 bottom-0 top-0 opacity-50"
          style={{
            backgroundImage:
              'url(data:image/png;base64,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)',
          }}
        />
        <div className="container text-white flex justify-center items-top h-full pt-g">
          {/* add margin of header height */}
          <div className="w-full md:w-2/3 mt-e">
            <div className="aspect-w-16 aspect-h-9 relative z-10">
              <ReactPlayer
                url={[heroVideomp4, heroVideowebm]}
                playing={isPlaying}
                width="100%"
                height="100%"
              />
              {/* <Img
                className="object-cover w-full h-full"
                style={{ position: 'absolute' }}
                fluid={heroVideo.posterImage.src.asset.fluid}
                alt={heroVideo.posterImage.alt}
              /> */}

              <button
                onClick={handlePlayPause}
                className="absolute w-full h-full flex p-c justify-end items-end"
              >
                {!isPlaying && (
                  <span className="h-20 w-20 rounded-full bg-seaGreen flex items-center justify-center">
                    {/* <Icon name="play" /> */}
                    ▶️
                  </span>
                )}
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Img fluid={heroTop.childImageSharp.fluid} fadeIn={false} />
        </div>
      </div>
      <Img fluid={heroBottom.childImageSharp.fluid} fadeIn={false} />
      <div className="bg-navy pt-f pb-f mb-e theme--dark">
        <div className="container">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="grid-span-1">
              <h2 className="f-h3 mb-c border-t-6 border-transparent text-white pt-c">
                {primarySection.title}
              </h2>
              <h5 className="f-h3 mb-c font-regular font-thin text-white">
                {primarySection.subtitle}
              </h5>
              <LinkPrimary to={primarySection.link.path} className="f-b1">
                {primarySection.link.label}
              </LinkPrimary>
            </div>
            <List
              items={primarySection.list.items}
              className="md:col-span-1 lg:col-span-2 lg:grid lg:grid-cols-2"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <ContentBlocks blocks={body.blocks} />
      </div>
    </Layout>
  )
}

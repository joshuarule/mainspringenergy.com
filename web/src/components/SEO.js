/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, image }) {
  const { sanitySettings: siteData } = useStaticQuery(
    graphql`
      query settingsQuery {
        sanitySettings {
          email
          seo {
            title
            description
            image {
              src {
                asset {
                  fixed(width: 1200, height: 630) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const metaDescription = description || siteData.seo.description
  const metaTitle = title || siteData.seo.title
  const defaultTitle = siteData.seo.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${siteData.seo.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${title} | ${siteData.seo.title}`,
        },
        {
          property: `og:image`,
          content:
            (image && image.src.asset.fixed.src) ||
            siteData.seo.image.src.asset.fixed.src,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteData.seo.author || ``,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${siteData.seo.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

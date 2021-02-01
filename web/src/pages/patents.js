import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import RichText from '../components/RichText'

export default ({ location }) => {
  const {
    sanityPatents: { body, title, seo },
  } = useStaticQuery(graphql`
    query PatentsQuery {
      sanityPatents {
        seo {
          ...seoFields
        }
        title
        body {
          _rawRichText
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container pt-g mt-g">
        <div className="lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="mb-e">{title}</h1>
            <RichText content={body._rawRichText} className="f-b1" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

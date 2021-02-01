import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/SEO'
import List from '../components/List'
import Layout from '../components/Layout'

const Terms = ({ location }) => {
  const {
    sanityTerms: { seo, list },
  } = useStaticQuery(graphql`
    query TermsQuery {
      sanityTerms {
        seo {
          ...seoFields
        }
        list {
          _rawItems
        }
      }
    }
  `)

  return (
    <Layout location={location} className="pt-g">
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container my-g pt-g">
        <List
          items={list._rawItems}
          className="md:cols-2 lg:cols-3"
          style={{ columnGap: 'var(--unit-e)' }}
        />
      </div>
    </Layout>
  )
}
export default Terms

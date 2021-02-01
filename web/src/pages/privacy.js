import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/SEO'
import List from '../components/List'

const Privacy = ({ location }) => {
  const {
    sanityPrivacy: { seo, list },
  } = useStaticQuery(graphql`
    query PrivacyQuery {
      sanityPrivacy {
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
export default Privacy

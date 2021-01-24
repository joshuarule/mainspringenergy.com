import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/SEO'
import TextColumns from '../components/TextColumns'

const Privacy = ({ location }) => {
  const {
    sanityPrivacy: { seo, privacyStatement },
  } = useStaticQuery(graphql`
    query PrivacyQuery {
      sanityPrivacy {
        seo {
          ...seoFields
        }
        privacyStatement {
          columnAmount
          columns {
            richText {
              children {
                marks
                text
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <TextColumns {...privacyStatement} />
    </Layout>
  )
}
export default Privacy

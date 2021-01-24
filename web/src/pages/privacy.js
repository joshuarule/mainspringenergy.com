import React from 'react'
import Layout from '../components/Layout'
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
          _rawColumns
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
      <div className="container mt-g">
        <TextColumns {...privacyStatement} />
      </div>
    </Layout>
  )
}
export default Privacy

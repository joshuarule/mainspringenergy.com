import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/Seo'


const privacy = () => {
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
  console.log(privacyStatement)
  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div>privacy statement here...</div>
    </Layout>
  )
}
export default privacy
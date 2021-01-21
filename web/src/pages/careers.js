import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'

export default ({ location }) => {
  const {
    sanityCareers: { seo, body },
  } = useStaticQuery(graphql`
    query CareersQuery {
      sanityCareers {
        seo {
          ...seoFields
        }
        body {
          ...blocks
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container mt-g">
        <ContentBlocks blocks={body.blocks} />
      </div>
    </Layout>
  )
}

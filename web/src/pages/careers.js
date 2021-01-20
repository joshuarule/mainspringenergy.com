import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import SEO from '../components/Seo'
import ContentBlocks from '../components/ContentBlocks'

export default ({ location }) => {
  const {
    sanityCareers: { seo, title, body },
  } = useStaticQuery(graphql`
    query CareersQuery {
      sanityCareers {
        seo {
          ...seoFields
        }
        title
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
        <p>{title}</p>
        <ContentBlocks blocks={body.blocks} />
        {/* just need to figure out the body/content blocks here */}
      </div>
    </Layout>
  )
}

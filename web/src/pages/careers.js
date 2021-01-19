import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/Seo'
import JobCategories from '../components/JobCategories'

export default function careers({ location }) {
  const {
    sanityCareers: { seo, sanityCareers },
  } = useStaticQuery(graphql`
    query CareersQuery {
      sanityCareers {
        seo {
          ...seoFields
        }
        title
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container mt-g">
        {/* TODO: not breaking, but not showing up... */}
        <p>{sanityCareers.title}</p> 
      </div>
    </Layout>
  )
}

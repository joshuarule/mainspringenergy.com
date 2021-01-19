import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import SEO from '../components/Seo'

export default ({ location }) => {
  const {
    sanityCareers: { seo, title },
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
        <p>{title}</p>
        <Link to="/roles">Roles</Link>
      </div>
    </Layout>
  )
}

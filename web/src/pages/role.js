import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'

export default ({ location }) => {
  const {
    sanityRole: { seo },
  } = useStaticQuery(graphql`
    query RoleQuery {
      sanityRole {
        seo {
          ...seoFields
        }
      }
    }
  `)

  let id
  const searchParams = new URLSearchParams(location.search)
  if (searchParams) {
    id = searchParams.get('id')
  } else {
    return '404'
  }
  return (
    <Layout location={location}>
      {seo && (
        <SEO
          title={seo.title}
          description={seo.description}
          image={seo.image}
        />
      )}
      <div className="container mt-g">{id}</div>
    </Layout>
  )
}

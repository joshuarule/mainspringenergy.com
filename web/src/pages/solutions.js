import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/Seo'

export default () => {
  const {
    sanitySolutions: { seo },
  } = useStaticQuery(graphql`
    query SolutionsQuery {
      sanitySolutions {
        seo {
          title
          description
          image {
            alt
            src {
              asset {
                fixed {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
    </Layout>
  )
}

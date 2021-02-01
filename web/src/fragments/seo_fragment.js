import { graphql } from 'gatsby'

export const SEO_FIELDS = graphql`
  fragment seoFields on SanitySeo {
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
`

import { graphql } from 'gatsby'

export const CTA_FIELDS = graphql`
  fragment ctaFields on SanityCta {
    _type
    link {
      label
      path
    }
    options {
      swap
      size
    }
    body {
      _type
      list
      children {
        text
        marks
        _type
      }
    }
    title
    image {
      alt
      src {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export const LIST_FIELDS = graphql`
  fragment listFields on SanityListItem {
    title
    subtitle
    link {
      path
      label
    }
    body {
      _type
      list
      children {
        text
        marks
        _type
      }
    }
  }
`

export const SEO_FIELDS = graphql`
  fragment blocks on SanityContentBlocks {
    blocks {
      ... on SanityBlockquote {
        _type
        author
        text
      }
      ... on SanityCta {
        ...ctaFields
      }
      ... on SanityFigure {
        _type
      }
      ... on SanityImageGrid {
        _type
        columns
        images {
          title
          path
          image {
            alt
            src {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
      ... on SanityLink {
        _type
      }
      ... on SanityList {
        _type
      }
      ... on SanityRichTextObj {
        _type
      }
      ... on SanitySectionTitle {
        _type
        title
        subtitle
        link {
          label
          path
        }
        col_1
        col_2
        border
      }
      ... on SanityTextColumns {
        _type
      }
    }
  }
`

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
      border
      textAlign
    }
    _rawBody
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
        options {
          offset
        }
      }
      ... on SanityCta {
        ...ctaFields
      }
      ... on SanityRichTextObj {
        _type
        _rawRichText
        richText {
          list
          style
          children {
            text
            marks
            _type
          }
          _type
        }
      }
      ... on SanityFigure {
        _type
        alt
        options {
          fullWidth
          marginTop
          marginBottom
        }
        src {
          asset {
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      ... on SanityImageGrid {
        _type
        columns
        options {
          fullWidth
          marginTop
          marginBottom
          logos
        }
        caption {
          richText {
            list
            style
            children {
              text
              marks
              _type
            }
            _type
          }
        }
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
        label
        path
      }
      ... on SanityList {
        _type
        _rawItems
      }
      ... on SanitySectionTitle {
        _type
        title
        subtitle
        link {
          label
          path
        }
        options {
          smallTitleSize
          topMargin
          bottomMargin
          border
        }
        col_1
        col_2
        border
      }
      ... on SanityTextColumns {
        _type
        columnAmount
        _rawColumns
      }
      ... on SanityDynamicBlock {
        _type
        name
      }
    }
  }
`

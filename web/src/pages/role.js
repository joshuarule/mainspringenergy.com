import React, { useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

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

  const iframeRef = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('defer', 'true')
    script.setAttribute('async', 'true')
    script.id = 'gnewtonjs'
    script.type = 'text/javascript'
    script.src =
      '//recruitingbypaycor.com/career/iframe.action?clientId=8a78858b5e748ace015e7d8826af113e'
    iframeRef.current.appendChild(script)
  }, [])

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
      <div ref={iframeRef} className="container my-g"></div>
    </Layout>
  )
}

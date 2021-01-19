import React from 'react'

import SEO from '../components/Seo'
import Layout from '../components/layout'
import RichText from '../components/RichText'

export default ({ location }) => {
  let id
  const searchParams = new URLSearchParams(location.search)
  if (searchParams) {
    id = searchParams.get('id')
  } else {
    return '404'
  }
  return (
    <Layout location={location}>
      {/* <SEO title={seo.title} description={seo.description} image={seo.image} /> */}
      <div className="container mt-g">{id}</div>
    </Layout>
  )
}

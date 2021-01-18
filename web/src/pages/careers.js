import React from 'react'
import Layout from '../components/layout'
import JobCategories from '../components/JobCategories'

export default function careers({ location }) {
  return (
    <Layout location={location}>
      <div className="container">careers.js</div>
      <JobCategories />
    </Layout>
  )
}

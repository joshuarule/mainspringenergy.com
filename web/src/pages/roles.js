import React from 'react'
import Layout from '../components/layout'
import JobCategories from '../components/JobCategories'

export default function careers({ location }) {
  return (
    <Layout location={location}>
      <div className="container mt-g">
        <h1 className="mb-g">We're Growing. Grow With Us</h1>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="mb-d">Open Roles</h3>
            <p>paragraph text</p>
          </div>
          <div>
            <h3 className="mb-d">Job Category</h3>
            <JobCategories />
          </div>
        </div>
      </div>
    </Layout>
  )
}

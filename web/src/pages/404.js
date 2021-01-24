import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const NotFoundPage = ({ location }) => (
  <Layout location={location} className="flex flex-cols">
    <SEO title="404: Not found" />
    <div className="container flex flex-1 items-center">
      <h1 className="f-h2 text-seaGreen">
        Sorry, page not found.{' '}
        <Link to="/" className="link--clean">
          Return home here. {`>`}
        </Link>
      </h1>
    </div>
  </Layout>
)

export default NotFoundPage

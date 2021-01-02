import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Icon from '../components/icon'

import SEO from '../components/seo'

const LinkPrimary = ({ children, ...rest }) => (
  <Link {...rest}>{children} ></Link>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-navy">
      <div
        className="container text-white flex items-center relative"
        style={{ height: '90vh' }}
      >
        <div className="relative z-10">
          <h1>
            Onsite power generation for{' '}
            <span className="md:block">the net-zero carbon future</span>
          </h1>
          <LinkPrimary to="/vision" className="link-f-b1 font-bold">
            Read Our Vision
          </LinkPrimary>
        </div>
        {/* Gallery */}
        <img
          className="absolute -right-1/4 bottom-1/4 w-2/3 transform -rotate-45"
          src="https://placehold.it/816/816"
          alt=""
        />
      </div>
    </div>
    <div className="container">
      <h1>Next Home page section</h1>
    </div>
  </Layout>
)

export default IndexPage

import React from 'react'
import Cta from '../components/cta'

import Layout from '../components/layout'
import { LinkPrimary } from '../components/link'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout navTheme="dark">
    <SEO title="Home" />
    <div className="bg-navy">
      <div
        className="container text-white flex items-center relative"
        style={{ height: '85vh' }}
      >
        <div className="relative z-10">
          <h1 className="mb-e">
            Onsite power generation for{' '}
            <span className="md:block">the net-zero carbon future</span>
          </h1>
          <LinkPrimary to="/vision" className="f-b1 font-bold link--light">
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
    <Cta
      className="-mt-f mb-g container"
      title="The Mainspring Linear Generator Affordable. Dispatchable. Clean."
      linkUrl="/vision"
      imgSrc="https://placehold.it/594x396"
      linkLabel="Read more"
      description="Fuel-flexible, and resilient power, saving carbon and cost today and accelerating the transition to the electric grid of the future."
    />
    <section className="container mb-g">
      <h1 className="f-h2">Solutions</h1>
      <div className="grid grid-cols-3 gap-1">
        <div className="relative">
          <div className="bg-gradient-to-t from-black to-transparent absolute fill left-0 right-0 bottom-0 top-0 opacity-40"></div>
          <h3 className="absolute bottom-0 left-0 p-c text-white">Title</h3>
          <img src="https://placehold.it/400x228" alt="" />
        </div>
        <div className="relative">
          <div className="bg-gradient-to-t from-black to-transparent absolute fill left-0 right-0 bottom-0 top-0 opacity-40"></div>
          <h3 className="absolute bottom-0 left-0 p-c text-white">Title</h3>
          <img src="https://placehold.it/400x228" alt="" />
        </div>
        <div className="relative">
          <div className="bg-gradient-to-t from-black to-transparent absolute fill left-0 right-0 bottom-0 top-0 opacity-40"></div>
          <h3 className="absolute bottom-0 left-0 p-c text-white">Title</h3>
          <img src="https://placehold.it/400x228" alt="" />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

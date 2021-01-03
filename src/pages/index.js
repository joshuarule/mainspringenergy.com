import React from 'react'
import Cta, { CtaThird } from '../components/cta'

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

    {/* Image Grid Component */}
    <section className="container mb-g">
      <h1 className="f-h2">Solutions</h1>
      <div className="lg:grid lg:grid-cols-3 gap-1">
        <div className="md-max:mb-b relative aspect-w-16 aspect-h-9">
          <img
            src="https://placehold.it/400x228"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="bg-gradient-to-t from-black to-transparent absolute fill left-0 right-0 bottom-0 top-0 opacity-40">
            <h3 className="absolute bottom-0 left-0 p-c text-white">Title</h3>
          </div>
        </div>
        <div className="md-max:mb-b relative aspect-w-16 aspect-h-9">
          <img
            src="https://placehold.it/400x228"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="bg-gradient-to-t from-black to-transparent absolute fill left-0 right-0 bottom-0 top-0 opacity-40">
            <h3 className="absolute bottom-0 left-0 p-c text-white">Title</h3>
          </div>
        </div>
        <div className="md-max:mb-b relative aspect-w-16 aspect-h-9">
          <img
            src="https://placehold.it/400x228"
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="bg-gradient-to-t from-black to-transparent absolute fill left-0 right-0 bottom-0 top-0 opacity-40">
            <h3 className="absolute bottom-0 left-0 p-c text-white">Title</h3>
          </div>
        </div>
      </div>
    </section>
    <div className="container mb-g">
      <figure className="border-t-6 border-smoke text-seaGreen pt-c lg:grid lg:grid-cols-2">
        <div>
          <blockquote
            className="mb-e"
            cite="https://www.huxley.net/bnw/four.html"
          >
            <p className="f-h3">
              Words can be like X-rays, if you use them properly they’ll go
              through anything. You read and you’re pierced.
            </p>
          </blockquote>
          <figcaption className="f-b1">
            Aldous Huxley, CEO Mainspring
          </figcaption>
        </div>
      </figure>
    </div>
    <section className="container mb-g">
      <CtaThird
        title="Linear Generator Technology Designed From First Principles"
        description="A fundamentally new power generation technology designed for high
        efficiency, low cost, and ultimate flexibility."
        linkUrl="/"
        linkLabel="Read all about it"
        imgSrc="https://placehold.it/400x228"
        imgAlt="Alt text of the image"
      />
    </section>
    <section className="container mb-g">
      <CtaThird
        title="Working at Mainspring"
        description="Mainspring is solving essential problems every day with a diverse, talented team of individuals who share our vision to address the growing threat of climate change and the need for affordable electricity for all."
        linkUrl="/jobs"
        reverse
        linkLabel="Opportunies"
        imgSrc="https://placehold.it/400x228"
        imgAlt="Alt text of the image"
      />
    </section>
  </Layout>
)

export default IndexPage

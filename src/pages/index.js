import React from 'react'
import Cta, { CtaThird } from '../components/cta'
import ImageGrid from '../components/imageGrid'

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
      {/* Section Title ? */}
      <h1 className="f-h2">Solutions</h1>
      <ImageGrid
        items={[
          {
            title: 'test title',
            url: '/solutions',
            image: {
              src: 'https://placehold.it/1920x1080',
              alt: 'Solutions ',
            },
          },
          {
            title: 'Vision Image',
            url: '/vision',
            image: {
              src: 'https://placehold.it/1920x1080',
              alt: 'Vision image',
            },
          },
          {
            title: 'Technology Image',
            url: '/technology',
            image: {
              src: 'https://placehold.it/1920x1080',
              alt: 'Tech image',
            },
          },
        ]}
        columns="3"
      />
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
        imgSrc="https://placehold.it/1920x1080"
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
        imgSrc="https://placehold.it/1920x1080"
        imgAlt="Alt text of the image"
      />
    </section>
  </Layout>
)

export default IndexPage

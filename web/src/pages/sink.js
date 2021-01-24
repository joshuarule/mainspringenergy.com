import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/SEO'

const SecondPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Sink" />
    <section className="mb-d">
      <h1>Typography</h1>
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Body 3</h3>
      <h4>Body 1</h4>
      <p>Body 2</p>
    </section>

    <section className="mb-d">
      <h1 className="border-b-2 mb-b">Responsive Spacing Units</h1>
      <div className="grid grid-cols-7">
        <div>
          <span className="body2">a</span>
          <div
            className="bg-seaGreen"
            style={{ height: 'var(--unit-a)' }}
          ></div>
        </div>
        <div>
          <span className="body2">b</span>
          <div
            className="bg-seaGreen"
            style={{ height: 'var(--unit-b)' }}
          ></div>
        </div>
        <div>
          <span className="body2">c</span>
          <div
            className="bg-seaGreen"
            style={{ height: 'var(--unit-c)' }}
          ></div>
        </div>
        <div>
          <span className="body2">d</span>
          <div
            className="bg-seaGreen"
            style={{ height: 'var(--unit-d)' }}
          ></div>
        </div>
        <div>
          <span className="body2">e</span>
          <div
            className="bg-seaGreen"
            style={{ height: 'var(--unit-e)' }}
          ></div>
        </div>
        <div>
          <span className="body2">f</span>
          <div
            className="bg-seaGreen"
            style={{ height: 'var(--unit-f)' }}
          ></div>
        </div>
        <div>
          <span className="body2">g</span>
          <div
            className="bg-seaGreen"
            style={{ height: 'var(--unit-g)' }}
          ></div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage

import React from 'react'
import Columns from '../components/Columns'
import Layout from '../components/layout'
import { LinkPrimary } from '../components/link'

export default function technology() {
  return (
    <Layout navTheme="dark">
      <div className="bg-gradient-to-t from-freshBlue to-seaGreen relative">
        {/* noise */}
        <div
          className="absolute left-0 right-0 bottom-0 top-0 opacity-50"
          style={{
            backgroundImage:
              'url(data:image/png;base64,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)',
          }}
        />
        <div
          className="container text-white flex justify-center"
          style={{ height: '50vh' }}
        >
          {/* add margin of header height */}
          <div className="w-full md:w-2/3 mt-g">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://placehold.it/1920x1080"
                alt="alt text"
                className="object-cover w-full h-full"
              />
              <div className="absolute w-full h-full flex items-center justify-center">
                <button className="h-20 w-20 rounded-full bg-seaGreen flex items-center justify-center">
                  play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://placehold.it/1200x900"
        alt="alt text"
        className="block w-full"
      />
      <div className="container bg-navy py-e">
        <Columns
          amount={3}
          items={[
            {
              content: (
                <>
                  <h2 className="f-h3 mb-c border-t-6 border-transparent text-white pt-c">
                    Technology Features
                  </h2>
                  <p className="f-b1 mb-c">
                    Breakthrough design and adaptive control software enable an
                    unprecedented combination of features and benefits.
                  </p>
                  <LinkPrimary to="/test">Product specifications</LinkPrimary>
                </>
              ),
            },
            {
              content: (
                <List
                  items={[
                    {
                      title: 'Title',
                      subtitle: 'Subtitle',
                      description: 'Description paragraph',
                    },
                    {
                      title: 'Title 2',
                      subtitle: 'Subtitle 2',
                      description: 'Description paragraph',
                    },
                  ]}
                />
              ),
            },
            {
              content: (
                <List
                  items={[
                    {
                      title: 'Title',
                      subtitle: 'Subtitle',
                      description: 'Description paragraph',
                      cta: {
                        label: 'Go Here',
                        url: '/',
                      },
                    },
                    {
                      title: 'Title 2',
                      subtitle: 'Subtitle 2',
                      description: 'Description paragraph',
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </div>
    </Layout>
  )
}

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <li className="mb-f border-t-6 border-seaGreen text-white pt-c">
        <h3>{item.title}</h3>
        <h5 className="mb-c">{item.subtitle}</h5>
        <p>{item.description}</p>
        {item.cta && (
          <LinkPrimary className="mt-c block" to={item.cta.url}>
            {item.cta.label}
          </LinkPrimary>
        )}
      </li>
    ))}
  </ul>
)

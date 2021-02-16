import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import Icon from './Icon'

export default () => {
  const {
    footerSettings: { address, email, socialNetworks },
  } = useStaticQuery(graphql`
    query footerQuery {
      footerSettings: sanitySettings {
        address {
          city
          state
          street
          street2
          zip
        }
        email
        socialNetworks {
          _key
          icon
          url
          title
          visible
          handle
        }
      }
    }
  `)
  return (
    <footer className="bg-footerBg pt-d pb-g ">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-y-d">
        <div className="md:col-span-3 lg:col-span-2">
          <Icon
            name="mark"
            className="text-steel sm-only:mb-e"
            style={{ width: '60px', height: 'auto' }}
          />
        </div>
        <div className="md:col-span-6 lg:col-span-3">
          <h4 className="font-bold mb-b">Contact Us</h4>
          <a
            className="text-steel text-steel hover:text-seaGreen"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <a
            className="text-steel block text-steel hover:text-seaGreen"
            href="https://maps.google.com"
          >
            <address>
              {address.street}
              <br></br>
              {address.street2 && (
                <>
                  {address.street2}
                  <br></br>
                </>
              )}
              {address.city}, {address.state} {address.zip}
            </address>
          </a>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-bold mb-b">Company</h4>
          <ul className="list-none p-0 m-0">
            <li>
              <Link
                className="text-steel mb-b block hover:text-seaGreen hover:text-seaGreen"
                to="/vision"
              >
                Our Vision
              </Link>
            </li>
            <li>
              <Link
                className="text-steel mb-b block hover:text-seaGreen hover:text-seaGreen"
                to="/company"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                className="text-steel mb-b block hover:text-seaGreen hover:text-seaGreen"
                to="/careers"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="text-steel mb-b block hover:text-seaGreen hover:text-seaGreen"
                to="/company#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3 md:order-1 lg:order-none lg:col-span-4">
          <h4 className="font-bold mb-b">Follow Us</h4>
          {socialNetworks.length && (
            <ul className="list-none p-0 m-0">
              {socialNetworks
                .filter(network => network.visible)
                .map(network => (
                  <li>
                    <a
                      className="text-steel mb-b block hover:text-seaGreen flex items-center"
                      href={network.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: network.icon }}
                        className="mr-b"
                        style={{
                          width: '16px',
                          height: '16px',
                          marginTop: '-2px',
                        }}
                      />
                      {network.title}
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className="mb-d text-grey-500 md:col-span-6 md:col-start-4 lg:col-start-3 lg:col-span-3 order-0">
          <Link className="text-grey-500 hover:text-seaGreen" to="/privacy">
            Privacy Policy
          </Link>{' '}
          | {''}
          <Link className="text-grey-500 hover:text-seaGreen" to="/terms">
            Terms of Use
          </Link>
          <p className="text-grey-500 mt-c">© Mainspring Energy, Inc. 2021</p>
        </div>
      </div>
    </footer>
  )
}

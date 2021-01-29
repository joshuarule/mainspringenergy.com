import React from 'react'
import { Link } from 'gatsby'

import Icon from './Icon'

export default function footer() {
  return (
    <footer className="bg-footerBg pt-d pb-g ">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-y-d">
        <div className="md:col-span-3 lg:col-span-2">
          <Icon
            name="mark"
            className="text-iron sm-only:mb-e"
            style={{ width: '60px', height: 'auto' }}
          />
        </div>
        <div className="md:col-span-6 lg:col-span-3">
          <h4 className="font-bold mb-b">Contact Us</h4>
          <a
            className="text-steel text-steel hover:text-seaGreen"
            href="mailto:info@mainspringenergy.com"
          >
            info@mainspringenergy.com
          </a>
          <a
            className="text-steel block text-steel hover:text-seaGreen"
            href="https://maps.google.com"
          >
            <address>
              3601 Haven Avenue<br></br>
              Menlo Park, CA 94025
            </address>
          </a>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-bold mb-b">Company</h4>
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
          <ul className="list-none p-0 m-0">
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
          <ul className="list-none p-0 m-0">
            <li>
              <Link
                className="text-steel mb-b block hover:text-seaGreen"
                to="/newsroom"
              >
                <Icon
                  name="linkedIn"
                  className="inline-block mr-b"
                  style={{ marginTop: '-2px' }}
                />
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-d text-smoke md:col-span-6 md:col-start-4 lg:col-start-3 lg:col-span-3 order-0">
          <Link className="text-smoke hover:text-seaGreen" to="/privacy">
            Privacy Policy
          </Link>{' '}
          | {''}
          <Link className="text-smoke hover:text-seaGreen" to="/terms">
            Terms of Use
          </Link>
          <p className="text-smoke mt-c">© Mainspring Energy, Inc. 2021</p>
        </div>
      </div>
    </footer>
  )
}

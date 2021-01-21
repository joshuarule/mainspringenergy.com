import React from 'react'
import { Link } from 'gatsby'

import Icon from './Icon'

export default function footer() {
  return (
    <footer className="bg-footerBg pt-d pb-g ">
      <div className="container grid grid-cols-12">
        <div className="col-span-2">
          <Icon
            name="mark"
            className="text-steel"
            style={{ width: '60px', height: 'auto' }}
          />
        </div>
        <div className="col-span-3">
          <h4 className="font-bold mb-b">Contact Us</h4>
          <a
            className="text-steel text-steel"
            href="mailto:info@mainspringenergy.com"
          >
            info@mainspringenergy.com
          </a>
          <a
            className="text-steel mb-d block text-steel"
            href="https://maps.google.com"
          >
            <address>
              3601 Haven Avenue<br></br>
              Menlo Park, CA 94025
            </address>
          </a>
          <div className="mb-d text-steel">
            <Link className="text-steel" to="/privacy">
              Privacy Policy
            </Link>{' '}
            | {''}
            <Link className="text-steel" to="/terms">
              Term of Use
            </Link>
          </div>
          <span className="text-steel">© Mainspring Energy, Inc. 2021</span>
        </div>
        <div className="col-span-3">
          <h4 className="font-bold mb-b">Company</h4>
          <ul className="list-none p-0 m-0">
            <li>
              <Link className="text-steel mb-b block" to="/company">
                Company
              </Link>
            </li>
            <li>
              <Link className="text-steel mb-b block" to="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4">
          <h4 className="font-bold mb-b">Follow Us</h4>
          <ul className="list-none p-0 m-0">
            <li>
              <Link className="text-steel mb-b block" to="/newsroom">
                <Icon
                  name="linkedIn"
                  className="inline-block mr-b text-steel"
                  style={{ marginTop: '-2px' }}
                />
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

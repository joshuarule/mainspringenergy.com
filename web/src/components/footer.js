import React from 'react'
import { Link } from 'gatsby'

import Icon from './icon'

export default function footer() {
  return (
    <footer className="bg-ivory pt-d pb-f">
      <div className="container grid grid-cols-12">
        <div className="col-span-2">
          <Icon
            name="mark"
            className="text-iron"
            style={{ width: '60px', height: 'auto' }}
          />
        </div>
        <div className="col-span-3">
          <h4 className="font-bold mb-b">Contact Us</h4>
          <a className="link--clean" href="mailto:info@mainspringenergy.com">
            info@mainspringenergy.com
          </a>
          <a className="link--clean mb-d block" href="https://maps.google.com">
            <address>
              3601 Haven Avenue<br></br>
              Menlo Park, CA 94025
            </address>
          </a>
          <div className="mb-d">
            <Link className="link--clean" to="/privacy">
              Privacy Policy
            </Link>{' '}
            | {''}
            <Link className="link--clean" to="/terms">
              Term of Use
            </Link>
          </div>
          <span>© Mainspring Energy, Inc. 2021</span>
        </div>
        <div className="col-span-3">
          <h4 className="font-bold mb-b">Company</h4>
          <ul className="list-none p-0 m-0">
            <li>
              <Link className="link--clean mb-b block" to="/newsroom">
                Newsroom
              </Link>
            </li>
            <li>
              <Link className="link--clean mb-b block" to="/company">
                Company
              </Link>
            </li>
            <li>
              <Link className="link--clean mb-b block" to="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4">
          <h4 className="font-bold mb-b">Follow Us</h4>
          <ul className="list-none p-0 m-0">
            <li>
              <Link className="link--clean mb-b block" to="/newsroom">
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
      </div>
    </footer>
  )
}

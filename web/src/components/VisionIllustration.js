import React from 'react'
import Icon from './Icon'

export default function VisionIllustration() {
  return (
    <div className="w-edge my-e">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-3 flex items-center justify-between">
            <ul className="f-h3 text-smoke">
              <li className="mb-c">Biogas</li>
              <li className="mb-c">Renewable Gas</li>
              <li className="mb-c">Green Hydrogren</li>
            </ul>
            <Icon
              name="chevron"
              width="36"
              height="72"
              className="text-smoke"
            />
          </div>
          <div className="col-span-6">
            <img src="https://placehold.it/1920x1080" alt="test" />
          </div>
          <div className="col-span-3">
            <div className="col-span-3 flex items-center justify-between">
              <Icon
                name="chevron"
                width="36"
                height="72"
                className="text-smoke"
              />
              <ul className="f-h3 text-smoke">
                <li className="mb-c">
                  Commercial &<br />
                  Industrial
                </li>
                <li className="mb-c">Grid Distribution</li>
                <li className="mb-c">Microgrids</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import './src/styles/global.css'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      id="gnewtonjs"
      type="text/javascript"
      src="//recruitingbypaycor.com/career/iframe.action?clientId=8a78858b5e748ace015e7d8826af113e"
    ></script>,
  ])
}

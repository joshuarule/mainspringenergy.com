import React from 'react'

import { LinkPrimary } from './Link'

export default ({ items }) => (
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

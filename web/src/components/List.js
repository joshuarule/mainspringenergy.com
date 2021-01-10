import React from 'react'

import { LinkPrimary } from './Link'
import RichText from './RichText'

export default ({ items, className }) => {
  return (
    <ul className={className}>
      {items.map(item => {
        return (
          <li className="mb-f border-t-6 border-seaGreen text-white pt-c">
            <h3>{item.title}</h3>
            <h5 className="mb-c">{item.subtitle}</h5>
            {item.body && <RichText content={item.body} />}
            {item.cta && (
              <LinkPrimary className="mt-c block" to={item.cta.url}>
                {item.cta.label}
              </LinkPrimary>
            )}
          </li>
        )
      })}
    </ul>
  )
}

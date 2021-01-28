import React from 'react'

import { LinkPrimary } from './Link'
import RichText from './RichText'

export default ({ items, className }) => {
  return (
    <ul className={className}>
      {items.map((item, i) => {
        return (
          <li
            key={`item-${i}`}
            className="mb-f border-t-6 border-seaGreen text-white pt-c"
          >
            <div className="mb-e">
              <h3>{item.title}</h3>
              {item.subtitle && (
                <h5 className="mt-a font-thin">{item.subtitle}</h5>
              )}
            </div>
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

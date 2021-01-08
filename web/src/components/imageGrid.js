import React from 'react'
import { Link } from 'gatsby'

export default function ImageGrid({ items, columns }) {
  let columnClass
  switch (columns) {
    case '4':
      columnClass = 'lg:grid-cols-4'
      break
    case '3':
      columnClass = 'lg:grid-cols-3'
      break
    default:
      columnClass = 'lg:grid-cols-2'
      break
  }
  return (
    <div className={`lg:grid ${columnClass} gap-1`}>
      {items.map((item, i) => (
        <div
          key={`item-${i}`}
          className="md-max:mb-b relative aspect-w-16 aspect-h-9"
        >
          <img
            src={item.image.src}
            alt={item.image.alt}
            className="object-cover w-full h-full"
          />
          {item.title && (
            <div className="bg-gradient-to-t from-black-40 to-transparent absolute fill left-0 right-0 bottom-0 top-0">
              <h3 className="absolute bottom-0 left-0 p-c text-white">
                {item.title}
              </h3>
            </div>
          )}
          {item.url && (
            <Link
              to={item.url}
              className="absolute left-0 right-0 bottom-0 top-0"
            />
          )}
        </div>
      ))}
    </div>
  )
}

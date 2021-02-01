import React from 'react'
import RichText from './RichText'

export default function TextColumns({
  columnAmount,
  _rawColumns,
  className = '',
}) {
  let columnClass
  switch (columnAmount) {
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
    <div className={`textColumns grid ${columnClass} ${className}`}>
      {_rawColumns.map((column, i) => (
        <div key={`column-${i}`} className="textColumn md-max:mb-f">
          {column.title && <h3 className="mb-d">{column.title}</h3>}
          {column.richText && (
            <RichText
              content={column.richText}
              className="f-b1 max-prose-50 lg:pr-f"
            />
          )}
        </div>
      ))}
    </div>
  )
}

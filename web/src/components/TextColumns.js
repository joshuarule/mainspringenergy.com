import React from 'react'
import RichText from './RichText'

export default function TextColumns({ columnAmount, _rawColumns }) {
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
    <div className={`grid ${columnClass} mt-b mb-e`}>
      {_rawColumns.map(column => (
        <div className="">
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

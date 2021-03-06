import React from 'react'

export default function Columns({ amount = '1', items }) {
  return (
    <div className={`lg:grid lg:grid-cols-${amount}`}>
      {items.map((item, i) => (
        <div key={`column-${i}`}>{item.content}</div>
      ))}
    </div>
  )
}

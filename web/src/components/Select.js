import React from 'react'

export default function Select({
  className = '',
  name,
  onChange,
  value,
  items,
}) {
  return (
    <div className={`select ${className}`}>
      <select onChange={onChange} value={value} name={name} className="">
        {items &&
          items.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  )
}

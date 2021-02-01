import React from 'react'

export default function Select({
  className = '',
  name,
  onChange,
  value,
  items,
}) {
  return (
    <div className={`select text-iron f-b1 ${className}`}>
      <select
        onChange={onChange}
        value={value}
        name={name}
        className="py-c px-c border rounded-md border-iron"
      >
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

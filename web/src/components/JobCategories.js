import React from 'react'

export default ({ categories, onChange, currentItem }) => {
  const keys = Object.keys(categories)
  return (
    categories && (
      <select
        onBlur={e => onChange(e)}
        id="jobCategories"
        className="border-2 rounded-md"
        value={currentItem}
      >
        {keys.map(category => {
          const label = categories[category].name
          return (
            <option value={category} key={category}>
              {label}
            </option>
          )
        })}
      </select>
    )
  )
}

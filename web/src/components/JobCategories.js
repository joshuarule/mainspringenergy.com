import React from 'react'
import slugify from 'slugify'

export default ({ categories, onChange, currentItem }) => {
  const keys = Object.keys(categories)
  return (
    categories && (
      <select
        onChange={e => onChange(e)}
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

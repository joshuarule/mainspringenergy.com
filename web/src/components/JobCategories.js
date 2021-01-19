import React from 'react'
import slugify from 'slugify'

export default ({ categories, onChange }) => {
  return (
    categories && (
      <select
        onChange={e => onChange(e)}
        id="jobCategories"
        className="border-2 rounded-md"
      >
        {categories.map(category => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          )
        })}
      </select>
    )
  )
}

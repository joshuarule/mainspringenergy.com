import React from 'react'

export default ({ categories, onChange, currentItem }) => {
  const keys = Object.keys(categories)
  return (
    categories && (
      <div className="select mb-d text-steel f-b1 max-w-xs">
        <select
          onChange={e => onChange(e)}
          id="jobCategories"
          className="py-c px-c border rounded-md border-steel"
          value={currentItem}
        >
          <option value={'all-roles'}>All Roles</option>
          {categories &&
            keys.map(category => {
              const label = categories[category].name
              return (
                <option value={category} key={category}>
                  {label}
                </option>
              )
            })}
        </select>
      </div>
    )
  )
}

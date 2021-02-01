import React from 'react'
import slugify from 'slugify'

export const parseCategories = jobs => {
  const categories = {}
  jobs.forEach(job => {
    const jobCategory =
      job[
        'newton:department'
        // process.env.NODE_ENV === 'development'
        //   ? 'newton_department'
        //   : 'newton:department'
      ][0]
    const id =
      job[
        'newton:jobId'
        // process.env.NODE_ENV === 'development' ? 'newton_jobId' : 'newton:jobId'
      ][0]
    const slug = slugify(jobCategory, { lower: true })

    if (!categories[slug]) {
      categories[slug] = {
        name: jobCategory,
        jobs: [],
      }
    }
    categories[slug].jobs.push({
      title: job.title[0],
      id,
      url: job.link[0].$.href,
    })
  })
  return categories
}

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

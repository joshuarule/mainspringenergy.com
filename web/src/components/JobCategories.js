import React, { useEffect, useState } from 'react'

const parseCategories = jobs => {
  const categories = []
  jobs.forEach(job => {
    const jobCategory = job['newton:department'][0]
    if (categories.indexOf(jobCategory) === -1) {
      categories.push(jobCategory)
    }
  })
  return categories
}

export default () => {
  const [categories, setCategories] = useState(false)

  useEffect(() => {
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCategories(parseCategories(data))
      })
  }, [])

  return (
    <div className="container">
      {categories &&
        categories.map(category => {
          return <p>{category}</p>
        })}
    </div>
  )
}

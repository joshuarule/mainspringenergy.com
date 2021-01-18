import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import slugify from 'slugify'

const parseCategories = jobs => {
  const categories = []
  jobs.forEach(job => {
    const jobCategory =
      job[
        process.env.NODE_ENV === 'development'
          ? 'newton_department'
          : 'newton:department'
      ][0]
    if (categories.indexOf(jobCategory) === -1) {
      categories.push(jobCategory)
    }
  })
  return categories
}

export default () => {
  const [categories, setCategories] = useState(false)
  let jobsData

  // grabs mock data from file in dev
  if (process.env.NODE_ENV === 'development') {
    const {
      allJobsMockJson: { nodes: jobs },
    } = useStaticQuery(graphql`
      query JobsQuery {
        allJobsMockJson {
          nodes {
            newton_department
          }
        }
      }
    `)
    jobsData = jobs
    if (!categories) {
      setCategories(parseCategories(jobsData))
    }
  }
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      fetch('/.netlify/functions/jobs')
        .then(response => response.json())
        .then(data => {
          jobsData = data
          setCategories(parseCategories(jobsData))
        })
    }
  }, [])

  return (
    categories && (
      <select id="jobCategories" className="border-2 rounded-md">
        {categories.map(category => {
          return (
            <option value={slugify(category)} key={category}>
              {category}
            </option>
          )
        })}
      </select>
    )
  )
}

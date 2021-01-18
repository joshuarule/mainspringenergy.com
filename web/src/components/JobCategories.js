import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      fetch('/.netlify/functions/jobs')
        .then(response => response.json())
        .then(data => {
          jobsData = data
          console.log(jobsData)
        })
    }
    // console.log(setCategories(parseCategories(jobsData)))
    // setCategories(parseCategories(jobsData))
  }, [])

  return (
    <div className="container">
      {/* {categories &&
        categories.map(category => {
          return <p key={category}>{category}</p>
        })} */}
    </div>
  )
}

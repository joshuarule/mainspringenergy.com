import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SEO from '../components/Seo'
import Layout from '../components/layout'
import JobCategories from '../components/JobCategories'
import RichText from '../components/RichText'

const parseCategories = jobs => {
  const categories = {}
  jobs.forEach(job => {
    const jobCategory =
      job[
        process.env.NODE_ENV === 'development'
          ? 'newton_department'
          : 'newton:department'
      ][0]
    if (!categories[jobCategory]) {
      categories[jobCategory] = []
    }
    categories[jobCategory].push(job.title[0])
  })
  return categories
}

export default ({ location }) => {
  const [categories, setCategories] = useState(false)
  let jobsData

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

  const {
    sanityRoles: { seo, body },
    allJobsMockJson,
  } = useStaticQuery(graphql`
    query rolesQuery {
      allJobsMockJson {
        nodes {
          newton_department
          title
        }
      }
      sanityRoles {
        body {
          _rawRichText
        }
        seo {
          ...seoFields
        }
      }
    }
  `)

  // grabs mock data from file in dev
  if (process.env.NODE_ENV === 'development') {
    if (!categories) {
      setCategories(parseCategories(allJobsMockJson.nodes))
    }
  }

  // current category

  // on change update jobs by category
  const [category, setCategory] = useState('Product Development')
  const handleOnchange = e => {
    setCategory(e.target.value)
  }

  return (
    <Layout location={location}>
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container mt-g">
        <h1 className="mb-g">We're Growing. Grow With Us</h1>
        <div className="grid grid-cols-3">
          <div className="">
            <h3 className="mb-d">Open Roles</h3>
            <RichText content={body._rawRichText} />
          </div>
          <div className="col-span-2">
            <h3 className="mb-d">Job Category</h3>
            <JobCategories
              categories={Object.keys(categories)}
              onChange={handleOnchange}
            />
            {categories && categories[category] && (
              <ul className="mt-d">
                {categories[category].map(title => (
                  <li className="f-b1 mb-a">{title}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

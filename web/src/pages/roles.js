import React, { useState, useEffect, useRef } from 'react'

import { graphql, useStaticQuery, Link } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import JobCategories, { parseCategories } from '../components/JobCategories'
import RichText from '../components/RichText'

export default ({ location }) => {
  const searchParams = new URLSearchParams(location.search)
  let cat = useRef(false)
  if (searchParams && searchParams.get('category')) {
    cat.current = searchParams.get('category')
  } else {
    cat.current = 'all-roles'
  }

  const [categories, setCategories] = useState(false)

  useEffect(() => {
    let jobsData
    // if (process.env.NODE_ENV !== 'development') {
    fetch('/.netlify/functions/jobs')
      .then(response => response.json())
      .then(data => {
        jobsData = data
        const parsedCategories = parseCategories(jobsData)
        setCategories(parsedCategories)
      })
    // }
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
          newton_jobId
          link {
            _ {
              href
            }
          }
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

  // on change update jobs by category
  const [category, setCategory] = useState(cat.current)

  if (!categories) return null

  const handleOnchange = e => {
    setCategory(e.target.value)
  }

  // set current jobs based on all or category
  let currentJobs = []
  if (category === 'all-roles') {
    Object.keys(categories).forEach(key =>
      currentJobs.push(...categories[key].jobs)
    )
  } else {
    currentJobs.push(...categories[category].jobs)
  }

  return (
    <Layout location={location} className="pt-g">
      <SEO title={seo.title} description={seo.description} image={seo.image} />
      <div className="container pt-g mt-g mb-g">
        <div className="grid grid-cols-3">
          <div className="">
            <h3 className="mb-d">Open Roles</h3>
            <RichText content={body._rawRichText} />
          </div>
          <div className="col-span-2">
            <h3 className="mb-d">Job Category</h3>
            <JobCategories
              categories={categories}
              onChange={handleOnchange}
              currentItem={category}
            />
            {categories && (
              <ul className="mt-d">
                {currentJobs.map((job, i) => {
                  const parts = job.url.split('/')
                  return (
                    <li key={`job-${i}`} className="f-b1 mb-a">
                      <Link to={`role/${parts[parts.length - 1]}`}>
                        {job.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

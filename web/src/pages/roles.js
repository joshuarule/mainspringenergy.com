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
    fetch('/.netlify/functions/jobs')
      .then(response => response.json())
      .then(data => {
        jobsData = data
        const parsedCategories = parseCategories(jobsData)
        setCategories(parsedCategories)
      })
  }, [])

  const {
    sanityRoles: { seo, body },
  } = useStaticQuery(graphql`
    query rolesQuery {
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
      <div className="container pt-g mt-d md:mt-d mb-g">
        <div className="md:grid md:grid-cols-3">
          <div className="">
            <h3 className="mb-d">Open Roles</h3>
            <RichText content={body._rawRichText} className="mb-f" />
          </div>
          <div className="col-span-2">
            <h3 className="mb-d">Job Category</h3>
            <JobCategories
              categories={categories}
              onChange={handleOnchange}
              currentItem={category}
            />
            {categories && (
              <ul className="mt-e">
                {currentJobs.map((job, i) => {
                  const parts = job.url.split('/')
                  return (
                    <li key={`job-${i}`} className="f-b1 font-medium">
                      <Link
                        to={`/role/${parts[parts.length - 1]}`}
                        className="text-seaGreen hover:text-seaGreenDark pb-c block"
                      >
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

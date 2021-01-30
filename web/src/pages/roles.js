import React, { useState, useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import slugify from 'slugify'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
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
    const id =
      job[
        process.env.NODE_ENV === 'development' ? 'newton_jobId' : 'newton:jobId'
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
      url: job.link[0]._.href,
    })
  })
  return categories
}

export default ({ location }) => {
  const searchParams = new URLSearchParams(location.search)
  let cat = useRef(false)
  if (searchParams) {
    cat.current = searchParams.get('category')
  }

  const [categories, setCategories] = useState(false)

  useEffect(() => {
    let jobsData
    if (process.env.NODE_ENV !== 'development') {
      fetch('/.netlify/functions/jobs')
        .then(response => response.json())
        .then(data => {
          jobsData = data
          const parsedCategories = parseCategories(jobsData)
          setCategories(parsedCategories)
          if (!searchParams) {
            cat.current = Object.keys(parsedCategories)[0]
          }
        })
    }
  }, [searchParams])

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

  // grabs mock data from file in dev
  if (process.env.NODE_ENV === 'development') {
    if (!categories) {
      const parsedData = parseCategories(allJobsMockJson.nodes)
      setCategories(parsedData)
      if (!cat.current) {
        cat.current = Object.keys(parsedData)[0]
      }
    }
  }

  // current category

  // on change update jobs by category
  const [category, setCategory] = useState(cat.current)
  const handleOnchange = e => {
    // set url params
    setCategory(e.target.value)
  }

  let currentJobs = []
  console.log(category)
  if (category === 'all-roles') {
    Object.keys(categories).forEach(key =>
      currentJobs.push(...categories[key].jobs)
    )
  } else {
    currentJobs.push(...categories[category].jobs)
  }

  console.log(currentJobs)

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
                {currentJobs.map(job => (
                  <li className="f-b1 mb-a">
                    <a target="_blank" rel={'noreferrer'} href={job.url}>
                      {job.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

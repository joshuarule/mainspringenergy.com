import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import slugify from 'slugify'

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
  let cat = false
  if (searchParams) {
    cat = searchParams.get('category')
  }

  const [categories, setCategories] = useState(false)
  let jobsData

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      fetch('/.netlify/functions/jobs')
        .then(response => response.json())
        .then(data => {
          jobsData = data
          const parsedCategories = parseCategories(jobsData)
          setCategories(parsedCategories)
          if (!searchParams) {
            cat = Object.keys(parsedCategories)[0]
          }
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
      if (!cat) {
        cat = Object.keys(parsedData)[0]
      }
    }
  }

  // current category

  // on change update jobs by category
  const [category, setCategory] = useState(cat)
  const handleOnchange = e => {
    // set url params
    setCategory(e.target.value)
  }
  console.log(category)
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
              categories={categories}
              onChange={handleOnchange}
              currentItem={category}
            />
            {categories && categories[category] && (
              <ul className="mt-d">
                {categories[category].jobs.map(job => (
                  <li className="f-b1 mb-a">
                    <a target="_blank" href={job.url}>
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

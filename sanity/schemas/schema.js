// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import home from './documents/home.js'
import person from './documents/person.js'
import solutions from './documents/solutions'
import technology from './documents/technology'
import vision from './documents/vision'
import careers from './documents/careers'
import company from './documents/company'
import jobs from './documents/jobs'
// components
import contentBlocks from './components/contentBlocks.js'
import callToAction from './components/callToAction.js'
import hero from './components/hero.js'
import gallery from './components/gallery.js'
import video from './components/video.js'
import figure from './components/figure.js'
import list from './components/list.js'
import listItem from './components/listItem.js'
import settings from './components/settings.js'
import seo from './components/seo.js'
import imageGrid from './components/imageGrid.js'
import blockQuote from './components/blockQuote.js'
import link from './components/link.js'
import { sectionBlah } from './documents/careers/components.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    home,
    person,
    solutions,
    technology,
    vision,
    careers,
    company,
    jobs,
    // components
    contentBlocks,
    callToAction,
    hero,
    gallery,
    video,
    figure,
    list,
    listItem,
    settings,
    seo,
    imageGrid,
    blockQuote,
    link,
    sectionBlah,
  ]),
})

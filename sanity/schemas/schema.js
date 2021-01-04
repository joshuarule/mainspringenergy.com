// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import contentBlocks from './components/contentBlocks.js'
import callToAction from './components/callToAction.js'
import hero from './components/hero.js'
import gallery from './components/gallery.js'
import textWithIllustration from './components/textWithillustration.js'
import video from './components/video.js'
import figure from './components/figure.js'
import home from './pages/home.js'
import solutions from './pages/solutions.js'
import technology from './pages/technology.js'
import vision from './pages/vision.js'
import list from './components/list.js'
import listItem from './components/listItem.js'
import careers from './pages/careers.js'
import person from './components/person.js'
import company from './pages/company.js'
import settings from './components/settings.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    contentBlocks,
    callToAction,
    hero,
    gallery,
    textWithIllustration,
    video,
    figure,
    home,
    solutions,
    technology,
    vision,
    list,
    listItem,
    careers,
    person,
    company,
    settings,
  ]),
})

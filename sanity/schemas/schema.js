// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import contentBlocks from './contentBlocks.js'
import callToAction from './callToAction.js'
import hero from './hero.js'
import gallery from './gallery.js'
import textWithIllustration from './textWithIllustration.js'
import video from './video.js'
import figure from './figure.js'
import home from './home.js'
import solutions from './solutions.js'
import technology from './technology.js'
import vision from './vision.js'
import list from './list.js'
import listItem from './listItem.js'
import careers from './careers.js'
import jobs from './jobs.js'
import roles from './roles.js'
import company from './company.js'

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
    jobs,
    roles,
    company,
  ]),
})

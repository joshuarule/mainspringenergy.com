// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './page.js'
import callToAction from './callToAction.js'
import form from './form.js'
import gallery from './gallery.js'
import hero from './hero.js'
import textWithIllustration from './textWithIllustration.js'
import video from './video.js'
import figure from './figure.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    callToAction,
    hero,
    form, 
    gallery,
    textWithIllustration,
    video,
    figure
  ]),
})

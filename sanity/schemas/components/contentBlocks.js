export default {
  name: 'contentBlocks',
  title: 'Content Blocks',
  type: 'array',
  of: [
    { type: 'textWithIllustration' },
    { type: 'callToAction' },
    { type: 'gallery' },
    { type: 'video' },
    { type: 'list'},
    { type: 'figure'},
  ]
}
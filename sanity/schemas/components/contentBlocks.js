export default {
  name: 'contentBlocks',
  title: 'Content Blocks',
  type: 'array',
  options: {
    editModal: 'fullscreen',
  },
  of: [
    { type: 'cta' },
    { type: 'gallery' },
    { type: 'video' },
    { type: 'list' },
    { type: 'figure' },
    { type: 'blockquote' },
  ],
}

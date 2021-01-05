export default {
  name: 'contentBlocks',
  title: 'Content Blocks',
  type: 'array',
  options: {
    editModal: 'fullscreen',
  },
  of: [
    { type: 'figure' },
    { type: 'imageGrid' },
    { type: 'video' },
    { type: 'cta' },
    { type: 'list' },
    { type: 'blockquote' },
  ],
}

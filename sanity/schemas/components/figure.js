export default {
  name: 'figure',
  title: 'Image',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'src',
      title: 'source',
      type: 'image',
    },
    {
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
    },
  ],
}

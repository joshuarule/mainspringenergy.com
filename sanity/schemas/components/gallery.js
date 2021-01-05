export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'figure' }],
      options: {
        layout: 'grid',
      },
    },
  ],
}

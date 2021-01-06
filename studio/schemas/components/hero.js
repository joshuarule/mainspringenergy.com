export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'gallery',
      title: 'Images',
      type: 'gallery',
    },
    {
      name: 'Link',
      title: 'Link',
      type: 'link',
    },
  ],
}

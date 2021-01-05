export default {
  name: 'listItem',
  title: 'List Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'block',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
    },
  ],
}

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
}

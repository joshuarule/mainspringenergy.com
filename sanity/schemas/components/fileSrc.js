export default {
  name: 'fileSrc',
  title: 'File Download',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'src',
      title: 'Source',
      type: 'file',
    },
  ],
}

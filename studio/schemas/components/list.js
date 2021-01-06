export default {
  title: 'List',
  name: 'list',
  type: 'object',
  fields: [
    {
      name: 'items',
      type: 'array',
      of: [{ type: 'listItem' }],
    },
  ],
}

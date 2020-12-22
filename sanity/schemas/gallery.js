export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'figure'}],
      options: {
        layout: 'grid'
      }
    }
  ]
}
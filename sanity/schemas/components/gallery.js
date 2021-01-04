export default {
  name: "gallery",
  title: "Gallery",
  type: "object",
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
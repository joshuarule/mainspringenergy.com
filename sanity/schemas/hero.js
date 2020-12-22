

export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline'
    },
    {
      name: 'heroImage',
      type: 'figure',
      title: 'Image',
    }
  ]
}
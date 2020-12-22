export default {
  name: "textWithIllustration",
  type: "object",
  title: "Text with Illustration",
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
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    }
  ]
}
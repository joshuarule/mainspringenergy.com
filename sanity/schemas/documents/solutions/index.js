export default {
  name: 'solutions',
  title: 'Solutions',
  __experimental_actions: ['update', 'publish'],
  type: 'document',
  preview: {
    select: {
      'title': 'seo.title'
    }
  },
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'productSpecs',
      title: 'Product Specs',
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
          type: 'string',
        },
        {
          name: 'sectionMedia',
          title: 'Section Media',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'figure',
            },
            {
              name: 'specs',
              title: 'Specification List',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
        },
      ],
    },
  ],
}

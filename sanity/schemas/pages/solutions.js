export default {
  name: 'solutions',
  title: 'Solutions',
  __experimental_actions: ['update', 'publish'],
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'productSpecs',
      title: 'Product Specs',
      type: 'object',
      // collapsible: true,
      // collapsed: true,
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

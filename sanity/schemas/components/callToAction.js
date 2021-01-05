export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'options',
      title: 'Options',
      type: 'object',
      options: {
        collapsible: true,
        collapsible: true,
      },
      fields: [
        {
          name: 'swap',
          title: 'Image on Left',
          type: 'boolean',
          options: {
            layout: 'checkbox',
          },
        },
        {
          name: 'size',
          title: 'Larger Image',
          type: 'boolean',
          options: {
            layout: 'checkbox',
          },
        },
      ],
    },
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
      name: 'text',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          marks: {
            decorators: [],
          },
        },
      ],
    },
    {
      name: 'link',
      type: 'object',
      title: 'Link',
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
    },
  ],
}

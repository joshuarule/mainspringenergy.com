export const solutions_specs = {
  name: 'solutions_specs',
  title: 'Product Specs',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
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
      name: 'solutions_specs_media',
      title: 'Section Media',
      type: 'solutions_specs_media',
    },
    {
      name: 'list',
      title: 'Specification List',
      type: 'list',
    },
  ],
}

export const solutions_specs_media = {
  name: 'solutions_specs_media',
  title: 'Section Media',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
    },
    {
      name: 'specs',
      title: 'Specification Bullets',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

export const solutions_downloads = {
  name: 'solutions_downloads',
  title: 'Downloads',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Downloads',
      type: 'array',
      of: [{ type: 'whitePaper' }],
    },
  ],
}

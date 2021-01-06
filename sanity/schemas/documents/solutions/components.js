export const solutions_specs = {
  name: 'solutions_specs',
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
      name: 'solutions_specs_media',
      title: 'Section Media',
      type: 'solutions_specs_media',
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
}

export const solutions_specs_media = {
  name: 'solutions_specs_media',
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
}

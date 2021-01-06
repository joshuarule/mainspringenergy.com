export default {
  name: 'imageGrid',
  title: 'Image Grid',
  type: 'object',
  fields: [
    {
      name: 'columns',
      title: 'Number of Columns',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: ['2', '3', '4'],
      },
    },
    {
      name: 'items',
      title: 'Images',
      type: 'array',
      layout: 'grid',
      of: [{ type: 'figure' }],
      validation: Rule => Rule.required().min(2),
    },
  ],
}

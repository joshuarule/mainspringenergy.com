export default {
  name: 'solutions',
  title: 'Solutions',
  __experimental_actions: ['update', 'publish'],
  type: 'document',
  preview: {
    select: {
      title: 'seo.title',
    },
  },
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'solutions_specs',
      title: 'Product Specs',
      type: 'solutions_specs',
    },
    {
      name: 'solutions_downloads',
      title: 'Downloads',
      type: 'solutions_downloads',
    },
  ],
}

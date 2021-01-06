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
      name: 'solutions_specs',
      title: 'Product Specs',
      type: 'solutions_specs',
    },
  ],
}

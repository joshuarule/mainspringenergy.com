export default {
  name: 'company',
  title: 'Company',
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
  ],
}

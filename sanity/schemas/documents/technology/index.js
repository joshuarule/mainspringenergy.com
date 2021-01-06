export default {
  name: 'technology',
  type: 'document',
  title: 'Technology',
  __experimental_actions: ['update', 'publish'],
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
  ],
}

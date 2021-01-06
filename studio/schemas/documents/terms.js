export default {
  name: 'terms',
  title: 'Terms',
  __experimental_actions: ['update', 'publish', 'create'],
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
  ],
}

export default {
    name: 'jobs',
    title: 'Jobs',
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
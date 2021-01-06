export default {
  name: 'vision',
  title: 'Vision',
  type: 'document',
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
    {
      title: 'body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'vision_sources',
      title: 'Sources',
      type: 'vision_sources',
    },
  ],
}

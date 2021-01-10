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
    {
      name: 'hero',
      title: 'Hero',
      type: 'company_hero',
    },
    {
      name: "body",
      title: "Content Blocks",
      type: "contentBlocks",
    },
  ],
}

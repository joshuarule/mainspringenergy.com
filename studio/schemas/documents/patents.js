export default {
  name: 'patents',
  title: 'Patents',
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
    {
      name: "patentInformation",
      title: "Patent Information",
      type: "text",
    },
  ],
}

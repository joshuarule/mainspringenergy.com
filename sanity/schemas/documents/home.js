export default {
  name: 'home',
  title: 'Home',
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
      title: 'Hero Gallery',
      type: 'gallery',
    },
    {
      name: 'cta',
      title: 'Linear Generator Section',
      type: 'cta',
    },
    {
      name: 'solutions',
      title: 'Solutions Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'gallery',
          title: 'Image Grid',
          type: 'imageGrid',
        },
      ],
    },
    {
      name: 'body',
      title: 'Content Blocks',
      type: 'contentBlocks',
    },
  ],
}

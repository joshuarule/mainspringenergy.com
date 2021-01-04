export default {
  name: 'home',
  title: 'Home',
  __experimental_actions: ['update', 'publish'],
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'homeHero',
      title: 'Home Hero',
      type: 'gallery',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'callToAction',
      description: 'cta',
    },
  ],
}

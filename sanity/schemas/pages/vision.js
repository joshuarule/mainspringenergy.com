export default {
  name: 'vision',
  title: 'Vision',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'article',
      title: 'Article',
      type: 'block', //TODO: this is almost exactly what we want...minus image(s)
    },
    {
      name: 'sources',
      title: 'Sources',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'sourceList',
          title: 'Source List',
          type: 'string',
          options: {
            list: [
              { title: 'test', value: 'Test' },
              { title: 'test1', value: 'Test1' },
              { title: 'test2', value: 'Test2' },
            ],
            layout: 'radio',
          },
        },
      ],
    },
  ],
}

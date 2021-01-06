export const vision_sources = {
  name: 'vision_sources',
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
}

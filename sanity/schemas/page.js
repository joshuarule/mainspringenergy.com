export default {
  
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: 'name',
      title: 'Page Name',
      type: 'string'
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'hero' },
        { type: 'textWithIllustration' },
        { type: 'callToAction' },
        { type: 'gallery' },
        { type: 'form' },
        { type: 'video' },
        ]
    }
  ]
}
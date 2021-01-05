import { ImQuotesLeft } from 'react-icons/md'
export default {
  name: 'blockquote',
  title: 'Blockquote',
  type: 'object',
  icon: ImQuotesLeft,
  fields: [
    {
      name: 'body',
      title: 'Quote Text',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
  ],
}

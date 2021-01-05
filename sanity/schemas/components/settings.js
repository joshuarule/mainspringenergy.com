import { BsFillPersonFill } from 'react-icons/bs'
export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: BsFillPersonFill,
  fields: [
    {
      name: 'siteTitle',
      title: 'Default Site Title',
      type: 'string',
    },
    {
      name: 'address',
      title: 'address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
        },
        {
          name: 'zip',
          title: 'Zip code',
          type: 'number',
        },
      ],
    },
  ],
}

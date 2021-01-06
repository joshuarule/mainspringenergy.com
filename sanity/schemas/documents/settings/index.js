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
      title: 'Mainsspring Office Address',
      type: 'address',
    },
  ],
}

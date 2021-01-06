export default {
  name: 'address',
  title: 'address',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'street',
      title: 'Street',
      type: 'string',
      placeholder: '123 Main St',
    },
    {
      name: 'street2',
      title: 'Street ',
      type: 'string',
      placeholder: 'PO BOX 5555',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      placeholder: 'Sunnyvale',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      placeholder: 'CA',
    },
    {
      name: 'zip',
      title: 'Zip code',
      type: 'number',
      placeholder: '12345',
    },
  ],
}

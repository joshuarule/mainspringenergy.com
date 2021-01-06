export default {
  name: 'address',
  title: 'address',
  type: 'object',
  fields: [
    {
      name: 'street',
      title: 'Street',
      type: 'string',
      placholder: '123 Main St',
    },
    {
      name: 'street2',
      title: 'Street ',
      type: 'string',
      placholder: 'PO BOX 5555',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      placholder: 'Sunnyvale',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      placholder: 'CA',
    },
    {
      name: 'zip',
      title: 'Zip code',
      type: 'number',
      placholder: '12345',
    },
  ],
}

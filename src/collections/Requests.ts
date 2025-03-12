import { CollectionConfig } from 'payload'

export const Requests: CollectionConfig = {
  slug: 'requests',
  fields: [
    {
      name: 'requestedBy',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'total',
      type: 'number',
    },

    // This might want to be placed on the request line,
    // not here
    // {
    //   name: 'requestLines',
    //   type: 'relationship',
    //   relationTo: 'request-lines',
    //   hasMany: true,
    // },
  ],
}

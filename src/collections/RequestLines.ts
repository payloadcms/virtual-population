import { CollectionConfig } from 'payload'

// Give me all the request lines that somebody submitted (request.requestedBy)
// Give me all the request lines by request ID (request)
// Give me all request lines where request total is less than 1000 (where request.total less_than 1000)

export const RequestLines: CollectionConfig = {
  slug: 'request-lines',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            return `${siblingData.description} - ${siblingData.lineNumber}`
          },
        ],
      },
    },
    {
      name: 'requestTotal',
      type: 'number',
      virtual: true,
      // What if we could map virtuals to a different query?
      // On this same topic, could we extend `virtual` to populate data from a related collection,
      // and in that case, we handle the population, in a performant manner, for them?
      // virtual: {
      //   sort: 'request.total',
      //   query: 'request.total',
      //   populate: 'request.total',

      // ALTERNATIVE TO EXPLICIT DEFINITIONS:
      // The only bad part about flattening them is that you might want to query and sort on it,
      // but you don't want to incur the performance overhead of populating it
      //   mapTo: 'request.total',
      //   populate: false,
      // },
      hooks: {
        afterRead: [
          () => {
            // Populate this total from the parent request, in the most performant manner possible
          },
        ],
      },
    },
    {
      name: 'requestedBy',
      type: 'text',
      virtual: true,
      hooks: {
        afterRead: [
          () => {
            // Populate this total from the parent request, in the most performant manner possible
            // Should be the "name" of the user, not the ID
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'lineNumber',
      type: 'number',
    },
    {
      name: 'cost',
      type: 'number',
    },
    {
      name: 'request',
      type: 'relationship',
      relationTo: 'requests',
    },
  ],
}

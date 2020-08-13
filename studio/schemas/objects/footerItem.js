export default {
  name: 'footerItem',
  title: 'Footer Item',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'title',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning('You need a shorter name'),
    },
    {
      name: 'type',
      title: 'tpe',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'slug',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 50),
      },
    },
  ],
}

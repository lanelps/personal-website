export default {
  type: 'document',
  title: 'Footer',
  name: 'footer',
  fields: [
    // The "of"-property must be set, and it must be an array
    {
      type: 'array', // type is required
      title: 'Footer Items',
      name: 'footerItems',
      of: [{ type: 'footerItem' }],
    },
  ],
}

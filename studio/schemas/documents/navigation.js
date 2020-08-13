export default {
  type: 'document',
  title: 'Navigation',
  name: 'navigation',
  fields: [
    // The "of"-property must be set, and it must be an array
    {
      type: 'array', // type is required
      title: 'Navigation Items',
      name: 'navigationItems',
      of: [{ type: 'navigationItem' }],
    },
  ],
}

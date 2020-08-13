// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettings from './documents/siteSettings.js'
import navigation from './documents/navigation.js'
import footer from './documents/footer.js'
import projects from './documents/projects.js'
import author from './documents/author.js'

//objects
import navigationItem from './objects/navigationItem.js'
import footerItem from './objects/footerItem.js'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    //documents
    siteSettings,
    navigation,
    footer,
    projects,
    author,
    //objects
    navigationItem,
    footerItem,
  ]),
})

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function Nav() {
  const {
    allSanityNavigation: { edges: navigation },
  } = useStaticQuery(graphql`
    query Nav {
      allSanityNavigation {
        edges {
          node {
            id
            navigationItems {
              _key
              name
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)
  return (
    <nav className='nav'>
      {navigation.map(({ node: nav }) =>
        nav.navigationItems.map((navItem) => (
          <span key={navItem._key}>
            <Link to={navItem.slug.current}>{navItem.name}</Link>
          </span>
        ))
      )}
    </nav>
  )
}

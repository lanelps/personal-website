import React from 'react'
import SEO from '../components/SEO'
import Git from '../components/Git'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout({ title, url, page, children }) {
  return (
    <div className={`page ${page && page}`}>
      <SEO title={title} url={url} />
      <Nav />
      <Git />
      <main id='content' className='content'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

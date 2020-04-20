import React from "react"

import SEO from "../components/SEO"
import Git from "../components/Git"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Card from "../components/Card"
import Video from "../components/Video"
import Mobile from "../components/Mobile"

export default () => {
  return (
    <>
      <div className='site'>
        <SEO />
        <Nav />
        <Git />
        <div className='content'>
          <Header />
        </div>
        <Footer />
      </div>
    </>
  )
}

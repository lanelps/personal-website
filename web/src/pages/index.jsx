import React from 'react'

import Layout from '../components/Layout.jsx'
import Header from '../components/Header'
// import Card from "../components/Card"
// import Video from "../components/Video"
// import Mobile from "../components/Mobile"

const Home = () => {
  const { title, text } = {
    title: 'Lane Wirihana Le Prevost-Smith',
    text:
      'Freelance Full-Stack Web Developer and Graphic Designer from Auckland, New Zealand.',
  }

  return (
    <Layout title='Home' url='/' page='home'>
      <Header title={title} text={text} />
    </Layout>
  )
}

export default Home

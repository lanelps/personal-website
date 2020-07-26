import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'

const { title, text } = {
  title: 'About',
  text:
    'Full-Stack Web Developer and Graphic Designer from Auckland, New Zealand. I have a Bachelor of Fine Arts in Graphic Design and a certificate in Full-Stack Web Development from Enspiral Dev Academy. I like to design and build blazingly fast static web sites using JAMstack technologies.',
}

const About = () => {
  return (
    <Layout title='About' url='/about' page='about'>
      <Header title={title} text={text} />
    </Layout>
  )
}

export default About

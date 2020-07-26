import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'

const { title, text } = {
  title: 'Services',
  text:
    'Web design, Web Development, e-commerce websites or other web based stuff.',
}

const Services = () => {
  return (
    <Layout title='Services' url='/services' page='services'>
      <Header title={title} text={text} />
    </Layout>
  )
}

export default Services

import React from 'react'

import cv from '../assets/img/Lane_Le_Prevost_Smith_CV_19.pdf'

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer>
      <div className='info'>
        <div>
          <span className='title'>Email: </span>
          <a href='mailto:lanelps@gmail.com' target='_blank'>
            lanelps@gmail.com
          </a>
        </div>
        <div>
          <span className='title'>Mobile: </span>
          <a href='tel:+64226954688' target='_blank'>
            0226954688
          </a>
        </div>
        <div>
          <span className='title'>Instagram: </span>
          <a href='https://instagram.com/lane_lps' target='_blank'>
            @lane_lps
          </a>
        </div>
        <div>
          <span className='title'>GitHub: </span>
          <a href='https://github.com/lanelps' target='_blank'>
            github.com/lanelps
          </a>
        </div>
        <div>
          <span className='title'>Linkedin: </span>
          <a href='https://www.linkedin.com/in/lane-lps/' target='_blank'>
            linkedin.com/in/lane-lps/
          </a>
        </div>
        <div>
          <a href={cv} target='_blank'>
            CV
          </a>
        </div>
      </div>
      <span>© Lane Le Prevost-Smith {date}</span>
    </footer>
  )
}

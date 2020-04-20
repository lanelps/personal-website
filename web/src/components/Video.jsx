import React from "react"

import Particles from "../assets/video/lanelps_Particles.mp4"

export default function Video() {
  return (
    <div className='grid--col--7-13 vid'>
      <video autoPlay loop>
        <source src={Particles} type='video/mp4' />
      </video>
    </div>
  )
}

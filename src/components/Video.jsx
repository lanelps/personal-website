import React from "react"

import Particles from "../../assets/video/lanelps_Particles.mp4"

export default function Video() {
  return (
    <video autoPlay loop>
      <source src={Particles} type='video/mp4' />
    </video>
  )
}

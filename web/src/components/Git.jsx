import React, { useState, useEffect, useContext } from 'react'

import DarkModeContext from '../context/DarkModeContext'

export default function Git() {
  const { isDark, setIsDark } = useContext(DarkModeContext)

  const [branch, setBranch] = useState('(master)')

  useEffect(() => {
    console.log(isDark)
    if (isDark) {
      setBranch('(master-dark)')
    } else {
      setBranch('(master)')
    }
  }, [isDark])

  const dayNightClick = () => {
    setIsDark(!isDark)
  }

  return (
    <div className='git'>
      <span>lanelps </span>
      <span onClick={dayNightClick} role='button' tabIndex={0}>
        {branch}
      </span>
      <span> website</span>
    </div>
  )
}

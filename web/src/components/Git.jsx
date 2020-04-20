import React, { useState, useEffect } from "react"

export default function Git() {
  const [master, setMaster] = useState({ text: " (master) ", isDark: false })
  const [time] = useState(new Date().getHours())

  const dayNightClick = () => {
    if (master.isDark) {
      setMaster({ text: " (master) ", isDark: false })
      document.documentElement.style.setProperty("--main-bg-color", "#fff")
      document.documentElement.style.setProperty("--main-color", "#000")
    } else {
      setMaster({ text: " (master-dark) ", isDark: true })
      document.documentElement.style.setProperty("--main-bg-color", "#000")
      document.documentElement.style.setProperty("--main-color", "#fff")
    }
  }

  const dayNightKey = e => {
    switch (e.keyCode) {
      case 68:
        if (master.isDark) {
          setMaster({ text: " (master) ", isDark: false })
          document.documentElement.style.setProperty("--main-bg-color", "#fff")
          document.documentElement.style.setProperty("--main-color", "#000")
        } else {
          setMaster({ text: " (master-dark) ", isDark: true })
          document.documentElement.style.setProperty("--main-bg-color", "#000")
          document.documentElement.style.setProperty("--main-color", "#fff")
        }
        break
      default:
        setMaster({ ...master })
    }
  }

  useEffect(() => {
    if (time > 6 && time <= 18) {
      setMaster({ text: " (master) ", isDark: false })
      document.documentElement.style.setProperty("--main-bg-color", "#fff")
      document.documentElement.style.setProperty("--main-color", "#000")
    } else {
      setMaster({ text: " (master-dark) ", isDark: true })
      document.documentElement.style.setProperty("--main-bg-color", "#000")
      document.documentElement.style.setProperty("--main-color", "#fff")
    }
  }, [time])

  return (
    <div className='git'>
      <span>lanelps</span>
      <span
        onClick={dayNightClick}
        onKeyDown={dayNightKey}
        role='button'
        tabIndex={0}>
        {master.text}
      </span>
      <span>website</span>
    </div>
  )
}

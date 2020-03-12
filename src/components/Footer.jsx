import React from "react"

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className='copywrite'>
      <span>© Lane Le Prevost-Smith {date}</span>
    </footer>
  )
}

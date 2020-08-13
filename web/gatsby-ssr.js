import React from 'react'
import { DarkModeProvider } from './src/context/DarkModeContext'
import './src/styles/main.css'

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
)

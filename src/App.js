import React from 'react'
import { Rows } from './components/Rows/Rows'
import { Banner } from './components/Banner/Banner'

import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Banner />
      <Rows />
    </div>
  )
}

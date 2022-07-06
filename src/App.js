import React from 'react'
import { Rows } from './components/Rows/Rows'
import { Banner } from './components/Banner/Banner'
import { Nav } from './components/Nav/Nav'

import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows />
    </div>
  )
}

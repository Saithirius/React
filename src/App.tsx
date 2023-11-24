import React, { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<p>Home</p>} />
      </Routes>
    </div>
  )
}

export default App

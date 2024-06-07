import { useState } from 'react'


import './App.css'
import Header from './components/Header'
import Register from './components/Register'
import List from './components/List'

function App() {

  return (
    <div className='App'>
      <Header />
      <Register />
      <List />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Prediction from './components/Prediction'
import ScrollBlock from './components/ScrollBlock'
import Ball8 from './components/Ball8'

import Background from './components/Background'

function App() {
 
  return (
    
    <>
      <Background />     
      <Prediction />
      <ScrollBlock />
      <Ball8 />
    </>
  )
}

export default App

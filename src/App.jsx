import { useEffect, useState } from 'react'
import './App.css'
import Prediction from './components/Prediction'
import ScrollBlock from './components/ScrollBlock'
import Ball8 from './components/Ball8'

function App() {
  const [count, setCount] = useState(0)
  const [words,setWords] = useState('')


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const getRandom = () =>{
    const gri = getRandomInt;

    const Adj = ["I","He","She","They","We"]
    const Vrbs = ["work","sleep","drink","eat","drive","stare","jump","lie"]
    const Nouns = ["apple","car","picture","pear","spear","sea","forest","stick"]

    return Adj[gri(Adj.length)]+ ' ' + Vrbs[gri(Vrbs.length)]+ ' '+Nouns[gri(Nouns.length)]
  }
  const one = getRandom();
  return (
    
    <>
     {/* <div className='flex flex-col w-[500px] absolute left-0 top-0'>
      <h1 className='bg-red-900 ring-offset-indigo-950 text-black'>{one}</h1>
      </div> */}

      <Prediction />
      <ScrollBlock />
      <Ball8 />
    </>
  )
}

export default App

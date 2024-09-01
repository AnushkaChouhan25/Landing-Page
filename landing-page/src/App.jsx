import React from 'react'
import { useState, useEffect } from 'react';
import Background from "./components/Background/Background";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"What you love"},
    {text1:"Give in to", text2:"your passion"},
    {text1:"Indulge", text2:"your passion"},
  ]
  const [heroCount, setheroCount] = useState(0);
  const [playStatus, setplayStatus] = useState(false);

  useEffect(() => {
    setInterval (() => {
      setheroCount((count)=>{return count ===2  ?0:count+1})
    },3000);
  },[])
  

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
        setplayStatus={setplayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setheroCount={setheroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App

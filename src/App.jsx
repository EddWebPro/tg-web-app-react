import { useEffect } from 'react'
import React from 'react';
import './App.css'
import SpeechRec from './components/SpeechRec';
// import { FaMicrophone } from "react-icons/fa6";

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  },[])

  const onClose = () => {
    tg.close()
  }


  return (
    <>
    <div className='App'>
     <button onClick={onClose}>
      Закрыть
     </button>
     </div> 
      <SpeechRec />
     
    </>
  )
}

export default App

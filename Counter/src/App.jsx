/* eslint-disable */
import { useState } from 'react';
import './App.css'

function App() {
  const[counter,setCounter]=useState(0)
  
  // let counter=0;
  function AddValue() {
    if(counter<20)
    setCounter(counter+1);
  

    
  }
  function Removevalue() {
    if(counter>=1)
   setCounter(counter-1)
  }
  

  return (
    <>
      <h1> count updation and deletion</h1>
      <br/>

      
      <h2> Counter value is {counter} </h2>
      <button onClick={AddValue}> Increase</button>
      <br/>
      
      <button onClick={Removevalue}> Decrease</button>
      
    </>
  )
}

export default App

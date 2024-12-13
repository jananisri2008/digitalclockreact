import React from 'react';
import { useState,useEffect,useRef} from 'react';
export default function App() {
  const [currentTime,setCurrentTime]=useState(new Date());
  const timer=useRef(null);
  useEffect(()=>{
    timer.current=setInterval(()=>{
      setCurrentTime(new Date());
    }, 1000);
    return()=>clearInterval(timer.current);
  },[]);

  const formatingDate = (date) => {
    return date.toLocaleDateString();
  };
  return (
    <div className='digitalclock'>
      <h1>Digital Clock</h1>
      <div className='time'>
        {currentTime.getHours().toString().padStart(2,'0')} :
        {currentTime.getMinutes().toString().padStart(2,'0')} :
        {currentTime.getSeconds().toString().padStart(2,'0')}
      </div>
      <div className='date'>{formatingDate(currentTime)}</div>
    </div>
  );
}


import React, { useState } from 'react'
import Total from './Total'
import SubCal from './SubCal'


const Cal = () => {
  const [allTime, setAllTimes] = useState<string[]>([])   
  const [time, setTime] = useState('')
  function handle(){
    setAllTimes([...allTime,time])
  }

  const [state, setState] = useState(true)
  return (
    <div>
      <h1>enter</h1>
       <input type="time" onChange={(e)=> setTime(e.target.value)}/>
       <button onClick={handle}>onClick</button>
       <h1>time</h1>
       {allTime.map((item, i)=>(<li key={i}>{item}</li>))}
    <Total allTime={allTime}/>
    <h1>Minus</h1>
    <button onClick={()=>setState(!state)}>onClick</button>
{state && <SubCal allTime={allTime} setAllTimes={setAllTimes} />}   
    </div>
  )
}

export default Cal

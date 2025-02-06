import React, { useState } from 'react';

function App() {
  let time = new Date().toLocaleTimeString(); // Define time first
  const [curTime, setCurTime] = useState(time);

  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString(); // Use a new variable
    setCurTime(newTime);
  };
setInterval(updateTime,1000)
  return (
    <div style ={{display:"grid",
    justifyContent:'center',
     border:'2px solid #ff5912',
      margin:'15%', padding:'5%',
      background:'#200506',
      color:'#fff'}}>
      <h2>Digital Clock</h2>
      <h1>{curTime}</h1>
     
    </div>
  );
}

export default App;

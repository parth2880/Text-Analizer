import { useState } from "react";
import React from "react";
// import '../App.css';

export default function Ustate() {
  // const [toggle,setToggle] = useState(false);
  //   const toggleIt =()=>{
  //     setToggle(!toggle)
  //   }
  //   return (
  //     <div className="App">
  //     <button onClick={toggleIt}>{toggle?'Hide':'Show'}</button>
  //      <div className={toggle&&'body-color'}>
  //       Body
  //      </div>
  //     </div>
  const [Color, setColor] = useState('white');

  const bgc = () => {
    if(Color === 'white'){
      setColor('black');
      document.getElementById('root').style.backgroundColor = '#333333';
      document.getElementById('root').style.color = '#ffffff';
      
    }
    else{
      setColor('white');
      document.getElementById('root').style.backgroundColor = '#ffffff';
      document.getElementById('root').style.color = '#000000';
    }
    

  }
  return( 
    
  <>
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={bgc} style={{color : Color}}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
  </div>
  </>
  )
}

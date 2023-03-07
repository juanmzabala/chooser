import './App.css'
import { useState } from 'react';
import Start from './components/Start'
import { AiOutlineSend } from "react-icons/ai";
import CanvaBase from './components/CanvaBase';


function Chooser() {
  const [isStarted,setIsStarted] = useState(true);
  
  const iniciar = ()=>{
    setIsStarted(!isStarted)
  }

  if (isStarted){
    return (
      <div className="container">
       <div className="icon-logo-container">
        <AiOutlineSend className='icon-logo'/>
      </div>
      <div className="logo-container">
        <p className='logo'>CHOOSER</p>
      </div>
      <Start start={iniciar}/>
      </div>
      )
  }else{
    return (
      <div className="container">
      <CanvaBase start={iniciar}/>
      </div>
      )
  }
}

export default Chooser;

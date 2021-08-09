import './App.css';
import React, {useState,useEffect} from 'react';
import LIne from './components/LIne';
import ButtonType from './components/ButtonType/ButtonType';


function App() {


  const [backgroundColor, setBackgroundColor] = useState("#383A45")
  
  const getRandomColor = ()=>{
    return "#" + Math.random().toString(16).slice(2,8);
 }
  const changeBackgroundColor = ()=>{
    setBackgroundColor(getRandomColor())
  }
  return (
    <div className="App" onClick={changeBackgroundColor}
    style={{backgroundColor:backgroundColor}} >
      <LIne changeBackgroundColor={changeBackgroundColor} getRandomColor={getRandomColor} />
      <ButtonType />
    </div>
  );
}

export default App;

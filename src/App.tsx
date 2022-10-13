import React, { useState } from 'react';
import './App.css';
import HelloClass from './Components/ex3/HelloClass/HelloClass';
import HelloFunction from './Components/ex3/HelloFunction/HelloFunction';
import HelloClass4 from './Components/ex4/HelloClass/HelloClass';
import HelloFunction4 from './Components/ex4/HelloFunction/HelloFunction';
import PlayerClass from './Components/ex5/PlayerClass/PlayerClass';
import PlayerFunction from './Components/ex5/PlayerFunction/PlayerFunction';
import CountDownClass from './Components/ex6/CountDownClass/CountDownClass';
import CountDownFunction from './Components/ex6/CountDownFunction/CountDownFunction';
import ClockClass from './Components/ex7/ClockClass/ClockClass';
import ClockFunction from './Components/ex7/ClockFunction/ClockFunction';

function App() {

  const [showCountDownCC,setShowCountDownCC] = useState<boolean>(true);
  const [showCountDownFC,setShowCountDownFC] = useState<boolean>(true);

  const hideCountDownCc = () =>{
    setShowCountDownCC(false);
  }

  const hideCountDownFc = () =>{
    setShowCountDownFC(false);
  }
  return (
    <div className="App">
      
      
      <h1>Ex3</h1>
      <HelloFunction/>
      <HelloClass/>
      <hr />
      <h1>Ex4</h1>
      <HelloFunction4 txt={"hello from fc using props"}/>
      <HelloClass4 txt="hello from fc using props"/>
      <hr />
      <h1>Ex5</h1>
      <PlayerFunction name={'Messi'} goals={750}/>
      <PlayerClass name={'Messi'} goals={750}/>
      <hr />
      <h1>Ex6</h1>
      {showCountDownCC && <CountDownClass ticks={5} cb={hideCountDownCc}/>}
      {showCountDownFC && <CountDownFunction ticks={5} cb={hideCountDownFc}/>}
      <hr />
      <h1>Ex7</h1>
      <ClockClass/>
      <ClockFunction/>
      <hr />
    </div>
  );
}

export default App;

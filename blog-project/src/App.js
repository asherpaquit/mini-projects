import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [size, setClick] = useState(0);

  useEffect(() =>{
    console.log("clicked")
  },[size])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="content">
        <Homepage />
        <button onClick = {() => setClick(size + 1)}>Click me</button>
        <p> {size} </p>
        </div>
      </header>
    </div>
  );
}

export default App;

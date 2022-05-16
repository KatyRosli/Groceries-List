import React, {FC} from 'react';
import './App.css';

const App : FC = () => {
  return ( 
  <div className="App">
    <div className="header">
      <div className="inputContainer">
      <input type="text" placeholder="List..."/>
      <input type="text" placeholder="Quantity..."/>
      <button>Add to list</button>
    </div>
    <div className="Grogeries List"></div>
    </div>
    </div>
  );
}

export default App;

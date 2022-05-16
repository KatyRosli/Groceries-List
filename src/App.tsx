import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';

const App : FC = () => {

  const [list, setList] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [groceries, setGroceriesList] = useState([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
  if (event.target.name === "list") {
    setList(event.target.value)
  } else {
    setQuantity(Number(event.target.value));
  }
    
  };
  return ( 
  <div className="App">
    <div className="header">
      <div className="inputContainer">
      <input type="text" placeholder="List..." name="list" onChange={handleChange}/>
      <input type="text" placeholder="Quantity..." name="deadline" onChange={handleChange}/>
      <button>Add to list</button>
    </div>
    <div className="Grogeries List"></div>
    </div>
    </div>
  );
}

export default App;

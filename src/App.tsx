import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import {IList} from './Interfaces'

const App : FC = () => {

  const [list, setList] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [groceriesList, setGroceriesList] = useState<IList[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  if (event.target.name === "list") {
    setList(event.target.value)
  } else {
    setQuantity(Number(event.target.value));
  }
  };

  const addList = (): void => {
    const newList = {listName: list, quantity: quantity };
    setGroceriesList([...groceriesList, newList]);
  };
  
  return ( 
  <div className="App">
    <div className="header">
      <div className="inputContainer">
      <input type="text" placeholder="List..." name="list" onChange={handleChange}/>
      <input type="text" placeholder="Quantity..." name="quantity" onChange={handleChange}/>
      <button onClick={addList}>Add to list</button>
    </div>
    <div className="Grogeries List"></div>
    </div>
    </div>
  );
}

export default App;

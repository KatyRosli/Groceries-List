import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import GroceriesList from './Components/GrogeriesList';
import {IList} from './Interfaces'

const App : FC = () => {

  const [list, setList] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [groceriesList, setGroceriesList] = useState<IList[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  if (event.target.name === "list") {
    setList(event.target.value);
  } else {
    setQuantity(Number(event.target.value));
  }
  };

  const addList = (): void => {
    const newList = {listName: list, quantity: quantity };
    setGroceriesList([...groceriesList, newList]);
    setList("");
    setQuantity(0);
  };

  const completeList = (listNameToDelete: string): void => {
    setGroceriesList(groceriesList.filter((list) => {
    return list.listName !== listNameToDelete;
    })
    );
  };
  
  return ( 
  <div className="App">
    <div className="header">
      <div className="inputContainer">
      <input 
      type="text" 
      placeholder="List..." 
      name="list" 
      value={list}
      onChange={handleChange}/>
      <input 
      type="number" 
      placeholder="Quantity..." 
      name="quantity" 
      value={quantity}
      onChange={handleChange}/>
      </div>
      <button onClick={addList}>Add List</button>
    </div>
    <div className="GrogeriesList">
      {groceriesList.map((list: IList, key: number) => {
      return <GroceriesList key={key} list={list} completeList={completeList}/>;
      })}
    </div>
    </div>
  );
}

export default App;

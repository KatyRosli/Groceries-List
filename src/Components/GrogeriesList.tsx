import React from 'react'
import { IList } from '../Interfaces';

interface Props {
 list: IList;
 completeList(listNameToDelete: string): void;
}

const GroceriesList = ({ list, completeList }: Props) => {
    return ( 
    <div className="list">
        <div className="content">
           <span>{list.listName}</span>
           <span>{list.quantity}</span>
        </div>
        <button onClick={() => {
            completeList(list.listName)}}>X</button>
    </div>
);
};

export default GroceriesList;
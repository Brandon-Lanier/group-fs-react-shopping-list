import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ItemForm from '../ItemForm/ItemForm';
import RenderList from '../RenderList/RenderList';
import Header from '../Header/Header.jsx'

import './App.css';


function App() {

    const [groceryList, setGroceryList] = useState([]);

    useEffect(() => {
        getList()}, []);

    const addItem = (newItem) => {
        console.log('in Add Item')
        axios.post('/list', {name: newName, quantity: newQuantity, unit: newUnit})
        .then(response => {
          getList();
        })
        .catch(err => {
          alert('Error Adding Item');
          console.log(err);
        })
    };

    const getList = () => {
        axios.get('/list')
          .then(response => {
            console.log(response.data);
            setGroceryList(response.data);
          })
          .catch(err => {
            alert('error getting list');
            console.log(err);
          })
      }

    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm 
                    addItem={addItem}
                />
                <RenderList 
                    groceryList={groceryList}
                />
            </main>
        </div>
    );
}

export default App;

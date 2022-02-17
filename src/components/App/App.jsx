import {useState} from 'react';
// import axios from 'axios';
import ItemForm from '../ItemForm/ItemForm';
import ListItem from '../ListItem/ListItem';
import AddItem from '../AddItem/AddItem';
import Header from '../Header/Header.jsx'

import './App.css';


function App() {
    const [newName, setNewName] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);  
    const [newUnit, setNewUnit] = useState('');
    const [groceryList, setGroceryList] = useState([]);

    const addItem = () => {
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
            setGroceryList(response.data)
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
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;

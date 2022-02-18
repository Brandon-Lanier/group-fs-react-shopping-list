import { useState } from 'react';
import React from 'react';

function ItemForm({ addItem }) {

    const [newName, setNewName] = useState('');
    const [newQuantity, setNewQuantity] = useState('');  
    const [newUnit, setNewUnit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({name: newName, quantity: newQuantity, unit: newUnit});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={newName} onChange={(e) => setNewName(e.target.value)} />
                <label htmlFor="quantity">Quantity</label>
                <input value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} />
                <label htmlFor="unit">Unit</label>
                <input value={newUnit} onChange={(e) => setNewUnit(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>


        </div>

    )
}

export default ItemForm;

function ItemForm() {
    
    const [newName, setNewName] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);  
    const [newUnit, setNewUnit] = useState(‘’);
    const [groceryList, setGroceryList] = useState([]);

    const handleSubmit = () {
        
    }


    return (
        <div>
            <label htmlFor="name">Name</label>
                <input value="name" placeholder="Name" />
            <label htmlFor="quantity">Quantity</label>
                <input value="quantity" placeholder="Quantity"/>
            <label htmlFor="unit">Unit</label>
            <button onClick={handleSubmit}>Save</button>
                


        </div>

    )
}

export default ItemForm;
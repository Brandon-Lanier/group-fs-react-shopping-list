
function ItemForm() {
    
    const [newName, setNewName] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);  
    const [newUnit, setNewUnit] = useState(‘’);

    const [newItem. setNewItem] = useState({name: '', quantity: 0, unit: ''})
    const [groceryList, setGroceryList] = useState([]);

    const handleSubmit = (e) {
        e.preventDefault();
        addItem(new)
    }


    return (
        <div>
            <form onSubmit={handleSubmnit}>
            <label htmlFor="name">Name</label>
                <input value={newName} onChange={(e) => setNewItem({e.target.value)} />
            <label htmlFor="quantity">Quantity</label>
                <input value="quantity" placeholder="Quantity"/>
            <label htmlFor="unit">Unit</label>
            <input type="submit" value="Submit"/>
            </form>


        </div>

    )
}

export default ItemForm;
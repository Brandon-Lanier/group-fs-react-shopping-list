
function ItemForm({addItem}) {
    
    // const [newName, setNewName] = useState('');
    // const [newQuantity, setNewQuantity] = useState(0);  
    // const [newUnit, setNewUnit] = useState(‘’);

    const [newItem, setNewItem] = useState({name: '', quantity: 0, unit: ''})

    const handleSubmit = (e) {
        e.preventDefault();
        addItem(newItem)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
                <input value={newItem.name} onChange={(e) => setNewItem({name: e.target.value}) }/>
            <label htmlFor="quantity">Quantity</label>
                <input value={newItem.quantity} onChange={(e) => setNewItem({quantity: e.target.value})}/>
            <label htmlFor="unit">Unit</label>
                <input value={newItem.unit} onChange={(e) => setNewItem({unit: e.target.value})} />
            <input type="submit" value="Submit"/>
            </form>


        </div>

    )
}

export default ItemForm;
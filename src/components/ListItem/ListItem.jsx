import './ListItem.css'

function ListItem({item}) {
    
    return (
        <div className="itemBox">
            <h3>{item.name}</h3>
            <p>{item.quantity} {item.unit}</p>
            <button>Buy</button>
            <button>Remove</button>
        </div>

    )
}

export default ListItem;
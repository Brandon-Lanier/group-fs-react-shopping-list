import './ListItem.css'

function ListItem({item}) {
    console.log('In List Item', item);
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
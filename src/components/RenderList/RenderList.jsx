import ListItem from '../ListItem/ListItem'


function RenderList({groceryList}) {

    return (

            <div className="listContainer">
                {groceryList.map(item => {
                    (<ListItem
                        key={item.id}
                        item={item}
                    />)
                })}
            </div>
    )
}

export default RenderList;
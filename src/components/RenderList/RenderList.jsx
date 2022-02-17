import ListItem from '../ListItem/ListItem'


function RenderList() {

    return (

            <div className="listContainer">
                {list.map(item => {
                    (<ListItem
                        key={item.id}
                        item={item}
                    />)
                })}
            </div>
    )
}

export default RenderList;
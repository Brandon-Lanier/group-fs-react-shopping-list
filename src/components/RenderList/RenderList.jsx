import ListItem from '../ListItem/ListItem';
import React from 'react';


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
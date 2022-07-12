import React from "react"
import ItemCount from "../../components/itemCount"

const ItemListContainer = ({ greeting }) => {

        const onAdd =(count)=>{
            //console.log(count)
            alert("Compraste:" + count)
        }
    return (
        <div>{ greeting }
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}
export default ItemListContainer
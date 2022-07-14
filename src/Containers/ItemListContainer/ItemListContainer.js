import React, { useEffect, useState } from "react"
import ItemCount from "../../components/ItemCount"
import ItemList from "../../components/ItemList"
import elden_ring from "../../components/Images/elden_ring.jpeg" 
import rimworld from "../../components/Images/rimworld.jpeg" 
import theOuterWorlds from "../../components/Images/the_outer_worlds.jpeg" 

const ItemListContainer = ({ greeting }) => {
        
        // Contador
        //const onAdd =(count)=>{
            //console.log(count)
            //alert("Compraste:" + count)
        //}
        

        const [items, setItems] =useState([])

        const productos = [
            { id:1, name: "Producto 1", price: 60, stock: 10, image: elden_ring },
            { id:2, name: "Producto 2", price: 30, stock: 20, image: rimworld },
            { id:3, name: "Producto 3", price: 35, stock: 30, image: theOuterWorlds },
        ]

        const task =new Promise((res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 2000)

        })

        useEffect(() => {
            
            task.then(res => setItems(res))

            
        }, [])

        console.log(items)

    return (
        <div>{ greeting }
           
            <ItemList items={items}/> 
        </div>
    )
}
export default ItemListContainer
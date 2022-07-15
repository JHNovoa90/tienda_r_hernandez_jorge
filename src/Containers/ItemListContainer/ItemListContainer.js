import React, { useEffect, useState } from "react"

import ItemList from "../../components/ItemList"
import elden_ring from "../../Images/elden_ring.jpeg"
import rimworld from "../../Images/rimworld.jpeg" 
import theOuterWorlds from "../../Images/the_outer_worlds.jpeg" 

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
import {getProducts} from "../components/products";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import Item from "../components/Item";

function ItemListContainer(){
        const {categoryId} = useParams();
        const [productos, setProductos] = useState([]);

        useEffect( () =>{
            setProductos([])
            getProducts(categoryId)
                .then( (items) => setProductos(items))
        }, [categoryId])

        

    return (
        <div className="productos">
            
            {productos.map((producto) =>{
                return (
                <Item 
                     key={producto.id}
                     id={producto.id}
                     title={producto.title}
                     price={producto.price}
                     img={producto.img}
                 />
           ) })}
            
        
        </div>
    )
}

export default ItemListContainer;
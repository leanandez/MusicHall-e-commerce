
import { useEffect, useState } from "react"
import Item from "../components/Item"
import {useParams} from "react-router-dom"
import {getItem} from "../components/products"




function ItemDetailContainer(){
  const {itemId} = useParams()
  const [item, setItem] = useState({})
  useEffect( () =>{
    getItem(itemId)
      .then((item) => setItem(item) )
  }, [itemId])
    
  
    return (
        <div key={item.id} className="detailCard">
          <div className="detailCard_info">
            <h2>{item.title}</h2>
            <h2>$ {item.price}</h2>
            </div>
            <div>
             <img src={item.img} alt="" className="detailImg"></img>
            </div>
          
                   
        </div>
    )
    
}

export default ItemDetailContainer
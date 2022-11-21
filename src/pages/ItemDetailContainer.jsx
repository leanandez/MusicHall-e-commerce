
import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { getItem } from "../components/products"
import Counter from "../components/Counter"
import { useCartContext } from "../context/cartContext"




function ItemDetailContainer() {
  const { itemId } = useParams()
  const [item, setItem] = useState({})
  const { addProduct } = useCartContext();
 

  useEffect(() => {
    getItem(itemId)
      .then((item) => setItem(item))
  }, [itemId])
 

  const handleAdd = (qty) => {
    addProduct(item, qty)

  }
  if(!item) return null
  //esta funcion handleAdd tiene un parametro qty, que será el numero que diga counter,
  // de esa manera le paso el qty a la funcion addProduct 
  //Luego, onAdd es una prop de Counter, que fue declarada con el valor que tenga counter


  return (
         
    <section className="itemDetailContainer"> 
      <div className="detailCard_title"><p>{item.title}</p></div>
      <div key={item.id} className="detailCard_container">
       
          <img src={item.img} alt="" className="detailcard_img"></img>
          <div className="detailCard_info">
            <p className="detailCard_price">$ {item.price}</p>
            <div className="detailCard_description">
              <p>Key features:</p>
              <p>{item.description}</p>
              </div>
            <div>
              <Counter stock={item.stock} onAdd={handleAdd} />
            </div>
            <p className="detailCard_stock">{item.stock} items in stock</p>
            
          </div>
         
      </div>

    </section>
   
  )

}

export default ItemDetailContainer
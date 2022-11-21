import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({children}) =>{
const [cart, setCart] = useState([])

const removeProduct = (item) =>{
    const newCart= cart.filter(data => data.id !=item.id)
    setCart(newCart)
}

const getCartQty = () =>{
     return cart.reduce((acc, item)=>acc + item.qty, 0)

}

const getTotalPrice = () =>{
    return cart.reduce((acc, item) =>acc+ item.price * item.qty, 0)
}

const addProduct = (item, qty) =>{
     const element = cart.find((data)=> data.id === item.id)
     //Este es un if para saber si el producto que agregaré al cart ya existe en el cart.
     //Si no existe, lo agrego con la cantidad que diga en el counter:
     if(!element) return setCart([...cart, {...item, qty}])
     console.log(cart)

     //Si existe, entonces le sumo la cantidad del counter a la cantidad que ya estaba agregada en el cart:
     const newCart = cart.map((product)=>{
             if(product.id === item.id){
                 return {...product, qty: product.qty + qty}
             }
             return product;
         })
         setCart(newCart)
    }

const emptyCart = () =>{
    setCart([])
}

    const value={
        cart,
        addProduct,
        removeProduct,
        getCartQty,
        getTotalPrice,
        emptyCart
    }

    return(
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    )

}
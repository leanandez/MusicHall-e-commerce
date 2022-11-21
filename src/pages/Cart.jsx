import { useCartContext } from "../context/cartContext"
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addOrder } from "../components/orders";
import { updateManyProducts } from "../components/products";
import { useEffect, useState } from "react"


export const Cart = () => {
    
    const { getTotalPrice, emptyCart,  removeProduct } = useCartContext();
    const { cart } = useCartContext();


    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [secondEmail, setSecondEmail] = useState("")

    const [orderId, setOrderId] = useState("")


    //function para crear la orden del usuario y enviarla a Firestore

    const createOrder = async () => {
        const items = cart.map(({ id, title, price, qty }) => ({
            id,
            title,
            price,
            qty,

        }))

        const order = {
            buyer: { name, lastname, phone, email },
            items,
            total: getTotalPrice(),
        }

        const id = await addOrder(order) //esto es para mostrarle al usuario el id de la orden, una vez finalizada la compra
        setOrderId(id)

        await updateManyProducts(items)

        await emptyCart()

    }

    //function para validar email

    const [validate, setValidate] = useState(true)
    function validEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    function validateSecondEmail(){
        const validEmail = (secondEmail === email) ? true : false
        return validEmail
    }


    useEffect(() => {
        const valid = validEmail(email)
        const validSecond = validateSecondEmail()
        if (validSecond && valid && name != "" && lastname != "" && phone != "") {
            setValidate(false)
        }
    }, [email, name, lastname, phone, secondEmail])



    


    return (
        <div>
            <div className="cartTitle">
                <p>Cart</p>
            </div>

            {orderId != "" && <div className="order">
                <p>Thank you for shopping in MusicHall!</p>
                <p>Your purchase ID is:</p>
                <p><strong>{orderId}</strong></p>

            </div>
            }

            <div className="cartConditional">
                <Link to="/">{cart.length == 0 && <p><BsArrowLeftCircleFill /> GO BACK TO STORE</p>}</Link>
            </div>



            {cart.map((product) => {
                return (
                    <div className="cartCard" key={product.id}>
                        <button className="btn" onClick={() => { removeProduct(product) }}>X</button>
                        <img src={product.img} className="cardImg"></img>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <p>{product.qty}</p>
                        <p>$ {product.price * product.qty}</p>
                    </div>


                )
            })}





 {cart.length != 0 &&
 
<div className="cartResume">

    <div className="cartTotal">
        <p>Total: $ {getTotalPrice()}</p>
    </div>

    <div className="cartForm">
        <p>To finish your shop please enter:</p>
        
        <label>Name</label>
        <input type="text" placeholder ="Required"onChange={(e) => setName(e.target.value)}/>
        <label>Last name</label>
        <input type="text" placeholder ="Required" onChange={(e) => setLastname(e.target.value)} />
        <label>Phone</label>
        <input type="number" placeholder ="Required" onChange={(e) => setPhone(e.target.value)}/>
        <label>E-mail</label>
        <input type="text" placeholder ="Required" onChange={(e) => setEmail(e.target.value)} />
        <label>Please, confirm your e-mail adress</label>
        <input type="text" placeholder="e-mail adress" onChange={(e)=> setSecondEmail(e.target.value)}></input>
        

        <button onClick={createOrder} disabled={validate}>BUY</button>
        
    </div>


</div>
}



</div>
)
}





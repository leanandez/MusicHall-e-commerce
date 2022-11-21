import { BsFillCartFill } from "react-icons/bs";

function CartWidget({ number }) {
    return <div className="cart">
        <div className="cartWidget"><BsFillCartFill /></div>
        <div className="cartNumber">
            {number}
        </div>

    </div>

}

export default CartWidget;
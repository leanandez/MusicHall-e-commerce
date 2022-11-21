import { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi"

const Counter = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }
    const handleSubstract = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }


    return (
        <div className="counter">
            <div className="counterQty">
                <p onClick={handleAdd}><BiUpArrow /></p>
                <input type="number" value={count} onChange={(e)=>{setCount(e.target.value)}}></input> 
                <p onClick={handleSubstract}><BiDownArrow /></p>
            </div>
            <button onClick={() => {
                if (count) onAdd(count);
            }}
                disabled={!count}>AÑADIR AL CARRITO</button>
                



        </div>


    )





}

export default Counter; 
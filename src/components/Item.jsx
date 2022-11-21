
import {  useNavigate } from "react-router-dom"


function Item({ id, title, price, img, description }) {
  const navigate = useNavigate();

  return (
    <div className="itemCard" key={id} onClick={() => navigate(`/item/${id}`)}>
      <img src={img} className="itemImg"></img>
      <div>
        <p className="itemTitle">{title}</p>
        <p className="itemPrice">$ {price}</p>
        <p className="itemDescription">{description}</p>
        

      </div>

    </div>


  );
}



export default Item; 
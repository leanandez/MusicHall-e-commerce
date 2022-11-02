
import {Link, useNavigate} from "react-router-dom"


function Item({id, title, price, img}) {
  const navigate = useNavigate();
  return (
     <div className="itemCard" key={id} onClick={()=>navigate(`/item/${id}`)}>
      <div><img src={img} className="itemImg"></img></div>
      <div>
        <h2>{title}</h2>
        <h3>$ {price}</h3>
      </div>
    </div>




  
  );
}



export default Item; 
import { Link } from "react-router-dom"
export default function Nav_work(){

return(

    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to= "/shop">Shop</Link></li>
          <li><Link to="/order">Order details</Link></li>
        </ul>
    </nav>
)
}
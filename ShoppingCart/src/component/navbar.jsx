import Rect from "react"
import '../styles/navbar.css'


const Navbar = (props) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={()=>props.show(true)}>
                    My Shoping
                </span>
                <div className="cart" onClick={()=>props.show(false)} >
                    <span>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>{props.cart.length}</span>
                </div>
            </div>
        </nav>
    )
}


export default Navbar
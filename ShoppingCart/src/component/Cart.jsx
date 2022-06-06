import React from "react";
import "../styles/Cart.css";

const Cart = (props) => {
  return props.cart.map((item) => (
    <div className="container">
      <div className="left">
        <img className="smallImg" src={item.data.img} />
        <div className="text">{item.data.title}</div>
      </div>
      <div className="right">
        <button className="delete" onClick={() => props.Filtered(item)}>
          DELETE
        </button>
      </div>
    </div>
  ));
};

export default Cart;

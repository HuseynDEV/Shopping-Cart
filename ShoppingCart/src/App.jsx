import React, { useState } from "react";
import Navbar from "./component/navbar";
import Amazon from "./component/amazon";
import Cart from "./component/Cart";

function App() {
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState([]);

  const handleClick = (data) => {
    setCart([...cart, data]);
    console.log(cart);
  };

  const Filtered = (item) => {
    let filter=cart.filter(m=>(
      m!=item
    ))
    setCart(filter);
  };

  return (
    <div>
      <Navbar show={setShow} cart={cart} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} Filtered={Filtered} />
      )}
    </div>
  );
}

export default App;

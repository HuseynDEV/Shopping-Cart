import React from "react";

const Card = (props) => {
  const { title, about, price, img } = props.data;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{about}</p>
        <p>Price-{price}</p>
        <button onClick={()=>props.handleClick(props)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;

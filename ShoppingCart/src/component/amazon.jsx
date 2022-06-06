import React, { useState } from "react";
import list from "../data";
import Card from "./Card";
import "../styles/amazon.css";

const Amazon = (props) => {
//  

  return (
    <section>
      {list.map((data) => (
        <Card data={data} handleClick={props.handleClick} />
      ))}
    </section>
  );
};

export default Amazon;

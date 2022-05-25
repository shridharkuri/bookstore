import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="card-body">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - Rs-{price}</p>
        <button className="btn btn-success"onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
    </div>
  );
};

export default Cards;
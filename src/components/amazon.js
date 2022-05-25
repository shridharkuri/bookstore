import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";


const Amazon = ({ handleClick }) => {
  return (
    <>
    <div className="header">Welcome to e-Bookstore</div>
    <section>
      <div className="row">
      {list.map((item) => (
        <div className="col-lg-4 col-sm-12">
        <Cards key={item.id} item={item} handleClick={handleClick} />
        </div>
      ))}
      </div>
    </section>
    <div className="footer">@Cognizant Technology Solutions</div>
    </>
  );
};

export default Amazon;
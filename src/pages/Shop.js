import React from "react";
import Products from "../Products";
import Item_details from "./Item_details";
import "./Shop.css";

const Shop = () => {
  let details = Products.map((data) => {
    return <Item_details item={data} />;
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="proper">{details}</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

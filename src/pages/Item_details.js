import React from "react";
import { useDispatch } from "react-redux";
import { Addi } from "../Redux/Action";

const Item_details = (props) => {
  const dispatch = useDispatch();

  const Send = (e) => {
    dispatch(Addi(e));
  };
  const { id, productName, price, productImage, quantity } = props.item;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 boxi">
          <div className="shop_imag">{<img src={productImage} className="img-fluid" />}</div>
          <div>
            <div>{productName}</div>
            <div> ${price}</div>
          </div>
          <div>
          <button 
            type="button"
            className="btn btn-primary btnn"
            onClick={() => Send(props.item)}
          >
           Add to cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item_details;

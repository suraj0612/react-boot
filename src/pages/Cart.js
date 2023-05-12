import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Dele, Addi } from "../Redux/Action";
import { Table } from "@mui/material";
import { Remover } from "../Redux/Action";
import './Cart.css'


const Cart = () => {
  const [info, aranData] = useState([]);

  const { id } = useParams();
  const data = useSelector((state) => state.Addi_Reducer.carts);

  const Id_check = () => {
    const aray = data.filter((item) => {
      return item.id == id;
    });
    aranData(aray);
  };

  useEffect(() => {
    Id_check();
  }, [id]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const Send = (elem) => {
    dispatch(Addi(elem));
  };

  const oneDelete = (items) => {
    dispatch(Remover(items));
  };

  const Remove = (e) => {
    dispatch(Dele(e));
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {info.map((list) => {
            return (
              <Table>
                <thead>
                  <tr>
                    <th style={{ margin: "4px", width: "70px" }}>imag</th>
                    <th style={{ margin: 0 }}>info</th>
                  </tr>
                </thead>
                <body>
                  <tr>
                    <td>
                     
                    <img
                        src={list.productImage} 
                       className="imgs" />
                     
                    </td>
                    <td>
                      <p>price:{list.price}</p>
                      <p>name:{list.productName}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span
                          className="btn btn warning"
                          type="button"
                          onClick={() => oneDelete(list)}
                        >
                          -
                        </span>
                        <span>{list.quantity}</span>
                        <span
                          className="btn btn warning"
                          type="button"
                          onClick={() => Send(list)}
                        >
                          +
                        </span>
                      </div>
                    </td>
                    <td>
                      <i
                        className="bi bi-trash3-fill"
                        onClick={() => Remove(list.id)}
                      ></i>
                    </td>
                  </tr>
                </body>
              </Table>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;

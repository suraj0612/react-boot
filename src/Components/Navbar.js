import React, { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dele } from "../Redux/Action";
import { Link } from "react-router-dom";
import './Navbar.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Table} from "@mui/material";

const Navbar = () => {
 const[data , aranData] = useState("");




  const values = useSelector((state) => state.Addi_Reducer.carts);
 
 const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const Delee =(i)=>{
    dispatch( Dele(i))
}

const Total = () => {
  let price = 0;
  values.map((value,k)=>{
    if(value.quantity>1){
       price= value.quantity*(value.price)+price
    }
    else{
      price= value.price +price 
    }
  })
  aranData(price)
}

useEffect(()=>{
  Total();
},[Total])



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          shopKart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center navbarSupport">
            <li className="nav-item">
              <Link to= "/" className="nav-link active"> Home</Link>
            </li>
            <li className="align-items-center">
              <Badge
                badgeContent={values.length}
                color="primary"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
             <LocalGroceryStoreIcon style={{color:"blue"}}></LocalGroceryStoreIcon>
              </Badge>
              <Menu
               className="menu_style"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {values.length ? (
                  values.map((item) => {
                    return (
                      <div className="container-fluid">
                     <div className="row">
                      <div className="col-md-12">
                        <Table>
                          <thead>
                            <tr>
                              <td>imag</td>
                              <td>description</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link to={`/cart/${item.id}`}  onClick={handleClose}>{<img src={item.productImage}  className="img-fluid"/>}</Link>
                              </td>
                              <td>
                                <p>{item.productName}</p>
                                <p><strong>$</strong> {item.price}</p>
                                <p>quantity:{item.quantity}</p>
                              </td>
                              <td>
                                <p onClick={()=>Delee(item.id)}>
                              <i className="bi bi-trash3-fill" ></i>
                              </p>
                              </td>
                              </tr>
                          </tbody>
                        </Table>
                      </div>
                      </div>
                      </div>
                    );
                  })
                  
                ) : 
                  <div>
                    <div>empt</div>
                  </div>
              }
               <p><strong>total</strong>:{data}</p>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
     
    </nav>
  );
};

export default Navbar;

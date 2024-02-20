import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import {useDispatch, useSelector} from 'react-redux'
import { addCart, removeCart } from "../reducers/cartSlice";


const Products = () => {
  const count = useSelector((state) => state.counter.value )
  
  
  const dispatch = useDispatch()
  const [item, setItem] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setItem(data);
    } catch (err) {
      console.log("Error Fetching Api", err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
 
  
  
  return (
    <div className="container product">
      {item.length !== 0 ? (
        item.map((product) => {
          return (
            <div key={product?.id}>
              <div className="card mx-3 my-3" style={{ width: "18rem" }}>
                <img
                  src={product?.image}
                  title={product?.title}
                  style={{ width: "15vh" }}
                  className="my-3 container card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product?.title}</h5>
                  <p className="card-text">{product?.description}</p>
                  <p className="card-text text-primary">
                    Price: {product?.price}
                  </p>
                  <Link to="#" className="btn btn-primary" onClick={()=>{dispatch(addCart(product?.id))}}>
                    Add To Cart :{count}
                  </Link>
                  <Link to="#" className="btn btn-primary my-3" onClick={()=>{dispatch(removeCart(product?.id))}}>
                    Remove from Cart :{count}
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="mx-5 text-center text-danger">No Item To Display </h1>
      )}
    </div>
  );
};

export default Products;

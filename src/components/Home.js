import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <h2 className="text-center my-5">Welcome to Shopping Store</h2>
      <h3 className="text-center text-primary">Products</h3>
      <Products />
    </div>
  );
};

export default Home;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
const Navbar = () => {
  const count = useSelector((state)=> state.counter.value)
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="mx-5 navbar-brand" to="#">
          Shopping Store
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                className="nav-link mx-5  nav-items"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link mx-5 nav-items"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link mx-5 nav-items"
                aria-current="page"
                to="/contact"
              >
                Contact US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link mx-5 nav-items"
                aria-current="page"
                to="/cart"
              >
                Your Carts : {count}
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

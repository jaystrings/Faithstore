import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { Cart } from "./Cart";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="position-fixed top-0 py-3 px-2 w-100 bg-white">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <h1 className="heading">Footshop</h1>
          </NavLink>
          <div className="d-flex gap-2 gap-lg-4">
            <Cart/>
            <Menu/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar
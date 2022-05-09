import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <section className="navbar">
      <a href="/" className="navbar-item">
        Home
      </a>
      <a href="/recipes" className="navbar-item">
        Recipes
      </a>
      <a href="/addnewrecipe" className="navbar-item">
        Add new recipe
      </a>
    </section>
  );
};

export default Nav;

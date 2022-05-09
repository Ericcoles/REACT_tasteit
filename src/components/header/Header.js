import React from "react";
import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top-logo">
          <a href="/" className="header-logo">
            {" "}
            tasteIT{" "}
          </a>
        </section>
        <section className="header-top_navbar"></section>
        <Nav />
      </section>
    </section>
  );
};

export default Header;

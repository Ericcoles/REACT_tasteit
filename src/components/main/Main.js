import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <header className="main-header">Looking for recipes?</header>
      <div className="cards">
        <div className="card">
          <h4>Browser recipes</h4>
          <p>
            Find your favorites in this collection. You can search recipes based
            on name or country.
          </p>
          <Link to="/recipes">All recipes </Link>
        </div>
        <div className="card">
          <h4>Add recipes</h4>
          <p>Recipe from your country is missing? No worries, let's add one!</p>
          <Link to="/addrecipes">Add recipes </Link>
        </div>
        <div className="card">
          <h4>Want to more about our projects</h4>
          <p>
            Visit our programme homepage, feel free to check us out and signup
            to the mailing list!
          </p>
          <a href="https://en.bc.fi/">Business College Helsinki homepage</a>
        </div>
      </div>
    </main>
  );
};

export default Main;

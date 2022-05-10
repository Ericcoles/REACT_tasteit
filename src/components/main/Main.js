import React from "react";
import "./Main.css";

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
          <a href="#">All recipes</a>
        </div>
        <div className="card">
          <h4>Add recipes</h4>
          <p>Recipe from your country is missing? No worries, let's add one!</p>
          <a href="#">Add recipes</a>
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

import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ReactDOM } from "react";
import Home from "./components/Home/Home";
import Addrecipes from "./routes/Addrecipes";
import Recipes from "./routes/Recipes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/addrecipes" element={<Addrecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Header />
<Hero />
<Main />
<Link to="/recipes">Recipes</Link>
<Link to="/addrecipes">Add New Recipes</Link> */
}

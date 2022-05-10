import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Link to="/recipes">Recipes</Link>
      <Link to="/addrecipes">Add New Recipes</Link>
    </div>
  );
}

export default App;

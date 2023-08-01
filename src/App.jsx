import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./Components/Blue.jsx";
import Red from "./Components/Red.jsx";
import Home from "./Components/Home.jsx";

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/blue"}>Blue</Link>
        <Link to={"/red"}>Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

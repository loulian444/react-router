import { Routes, Route } from "react-router-dom";
import Blue from "./Blue.jsx";
import Red from "./Red.jsx";
import Home from "./Home.jsx";
import DadJokes from "./DadJokes.jsx";
import ChuckNorrisJokes from "./ChuckNorrisJokes.jsx";

const RouteSection = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/joke" element={<DadJokes />} />
        <Route path="/chuckNorrisJoke" element={<ChuckNorrisJokes />} />
      </Routes>
    </div>
  );
};

export default RouteSection;

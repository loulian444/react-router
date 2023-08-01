import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import RouteSection from "./Components/Routes.jsx";
import DadJokes from "./Components/DadJokes.jsx";

const App = () => {
  return (
    <div id="container">
      <Navbar />
      <RouteSection />
      <DadJokes />
    </div>
  );
};

export default App;

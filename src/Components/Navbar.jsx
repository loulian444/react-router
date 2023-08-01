import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/blue"}>Blue</Link>
      <Link to={"/red"}>Red</Link>
      <Link to={"/joke"}>Joke</Link>
      <Link to={"/chuckNorrisJoke"}>Chuck Norris Joke</Link>
    </div>
  );
};

export default Navbar;

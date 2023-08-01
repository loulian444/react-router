import { useState } from "react";
import Button from "@mui/material/Button";

const ChuckNorrisJokes = () => {
  const url = "https://api.chucknorris.io/jokes/random";

  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setJoke(data.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="joke" id="chuckNorrisJokes">
      {joke && <p>{joke}</p>}

      <Button variant="contained" color="success" onClick={fetchJoke}>
        Chuck one daddy
      </Button>
    </div>
  );
};

export default ChuckNorrisJokes;

import { useState } from "react";

const ChuckNorrisJokes = () => {
  const url = "https://api.chucknorris.io/jokes/random";

  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setJoke(data.value)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="joke" id="chuckNorrisJokes">
      {joke && <p>{joke}</p>}

      <button onClick={fetchJoke}>Click me</button>
    </div>
  );
};

export default ChuckNorrisJokes;

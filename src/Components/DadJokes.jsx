import { useState } from 'react';

const DadJokes = () => {
  const url = "https://icanhazdadjoke.com/";
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "User-Agent":
        "3l.liu444@gmail.com (https://github.com/loulian444/react-router)",
    },
  };

  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      
      setJoke(data.joke);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="joke">
      {joke && <p>{joke}</p>}

      <button onClick={fetchJoke}>Click me</button>
    </div>
  );
};

export default DadJokes;

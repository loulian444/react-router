const DadJokes = () => {
  const url = "https://dad-jokes.p.rapidapi.com/random/joke";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1a51282a78msh888100b4b3a51ffp1fb669jsn1745732675de",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  const fetchJoke = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const setup = data.body[0].setup;
      const punchline = data.body[0].punchline;

      console.log(`${setup}, ${punchline}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>heh</h1>
      <button onClick={fetchJoke}>Click me</button>
    </div>
  );
};

export default DadJokes;

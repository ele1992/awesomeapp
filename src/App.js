import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";
import LikeCounter from "./components/LikeCounter";
import Awsomeanimals from "./components/Awesomeanimals";
import ArticleCard from "./components/ArticleCard";
import ArticleList from "./components/ArticleList";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

const awesome_Animal = [
  "Chicken",
  "Sloth",
  "Porcupine",
  "Killer whale",
  "Velociraptor",
];

function App() {
  return (
    <div className="App">
      <main className="container ">
        <Title content="Hello there" />
        <ArticleList />
        <ArticleCard />
        <LikeCounter />
        {/*<div className="row">
          {all_pokemon.map((pokemon, index) => (
            <div className="col-md-6 col-lg-4 my-5">
              <Pokemon
                key={index}
                name={pokemon.name}
                weight={pokemon.weight}
                awesome={pokemon.awesome}
                terrifying={pokemon.terrifying}
                abilities={pokemon.abilities}
              />
            </div>
          ))}
          </div>*/}
      </main>
    </div>
  );
}

export default App;

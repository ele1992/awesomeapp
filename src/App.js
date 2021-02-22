import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome
        </a>
      </header>
    </div>
  );
}

export default App;

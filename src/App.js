import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import GenerateToken from "./spotify/spotify_functions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Discovering React
        </p>
      </header>
        <GenerateToken />
        <Counter />
    </div>
  );
}

export default App;

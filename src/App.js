import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import GenerateToken from "./spotify/GenerateToken";
import SpotifyLogIn from "./spotify/SpotifyLogIn";

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
      <br/>
      <SpotifyLogIn />
    </div>
  );
}

export default App;

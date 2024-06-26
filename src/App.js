import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Discovering React
        </p>
      </header>
        <Counter />
    </div>
  );
}

export default App;

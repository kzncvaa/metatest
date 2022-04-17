import logo from './logo.svg';
import './App.css';
import MetaMaskAuth from "./MetaBtn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <MetaMaskAuth>meta auth</MetaMaskAuth>
    </div>
  );
}

export default App;

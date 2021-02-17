import logo from './logo.svg';
import './App.css';
import Bio from './bio/bio.js';





function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to my site </h1>
        <Bio/>
      </header>
    </div>
  );
}

export default App;

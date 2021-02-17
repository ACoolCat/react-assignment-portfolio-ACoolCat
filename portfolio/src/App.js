import logo from './logo.svg';
import './App.css';
import Bio from './bio/bio.js';
import Story from './story/story.js'





function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Bio/>
        <Story/>
      </header>
    </div>
  );
}

export default App;

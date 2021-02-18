import './App.css';
import Bio from './bio/bio.js';
import Story from './story/story.js'
import Projects from './projects/projects.js'
import Resume from './resume/resume.js'
import Face from './Face.jpg'





function App() {

  return (
    <div className="App">
      <div class="music">
      </div>
      <div className="header">
        <img src={Face} className="face" alt="face" />
      </div>
      <header className="Base">
        <Bio/>
        <Projects/>
        <Story/>
        <Resume/>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Bio from './bio/bio.js';
import Story from './story/story.js'
import Projects from './projects/projects.js'
import Resume from './resume/resume.js'
import Face from './Face.jpg'





function App() {

  function bioVisible(){
    document.getElementById("bioClass").style.display = "block";
    document.getElementById("projectClass").style.display = "none";
    document.getElementById("storyClass").style.display = "none";
    document.getElementById("resumeClass").style.display = "none";
  }

  function projectVisible(){
    document.getElementById("projectClass").style.display = "block";
    document.getElementById("bioClass").style.display = "none";
    document.getElementById("storyClass").style.display = "none";
    document.getElementById("resumeClass").style.display = "none";
  }

  function storyVisible(){
    document.getElementById("storyClass").style.display = "block";
    document.getElementById("projectClass").style.display = "none";
    document.getElementById("bioClass").style.display = "none";
    document.getElementById("resumeClass").style.display = "none";
  }

  function resumeVisible(){
    document.getElementById("resumeClass").style.display = "block";
    document.getElementById("projectClass").style.display = "none";
    document.getElementById("storyClass").style.display = "none";
    document.getElementById("bioClass").style.display = "none";
  }

  return (
    <div className="App">
      <div className="header">
        <img src={Face} className="face" alt="face" />
        <div className="buttonList">
          <button onClick={bioVisible}>Bio</button>
          <button onClick={projectVisible}>Projects</button>
          <button onClick={storyVisible}>Story</button>
          <button onClick={resumeVisible}>Resume</button>
        </div>
      </div>
      <div className="Base">
        <div Id="bioClass"><Bio/></div>
        <div Id="projectClass"><Projects/></div>
        <div Id="storyClass"><Story/></div>
        <div Id="resumeClass"><Resume/></div>
      </div>
    </div>
  );
}

export default App;

import Form from './resume.PNG'

function Resume() {

  return (
    <div className="Resume">
        <h2>Interested?</h2>
        <div className="container">
          <p>Check out my resume: </p>
          <img src={Form} className="resume" alt="resume" />
        </div>
    </div>
  );
}

export default Resume;

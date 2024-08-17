import { Link } from 'react-router-dom';

import '../styles/Home.css';

function Home() {
  return (
    <div className="home section">
      <h1>Hi, my name is</h1>
      <h2>Kotsasmin</h2>
      <h1>I am an aspiring</h1>
      <h3>Full Stack Web Developer</h3>
      <h4>And Software Engineer</h4>
      <div className="buttons">
        


      <div className="center-container">
      <Link to="/about" className="no-underline">
  <div className="contact-me-now-btn">
    <span className="text" >Check out my skills!</span>
  </div>
</Link>
</div>

    </div>
    </div>
  );
}

export default Home;

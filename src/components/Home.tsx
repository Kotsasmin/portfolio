import { Link } from 'react-router-dom';
import React from './React';
import Slogan from './Slogan.tsx';
import '../styles/Home.css';


function Home() {
  return (
    <div className="home section">
      <h1>Hi, my name is</h1>
      <h2>Kotsasmin</h2>
      <h1>I am an aspiring</h1>
      <React/>

      <h3>Full Stack Web Developer</h3>

      <div className="buttons">
      <Slogan/>

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

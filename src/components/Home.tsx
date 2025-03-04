import { Link } from 'react-router-dom';
import React from 'react';
import ReactAnimation from './React';
import Slogan from './Slogan.tsx';
import '../styles/Home.css';
import Typewriter from 'typewriter-effect/dist/core';

function Home() {
  const typewriterRef1 = React.useRef(null);
  const typewriterRef2 = React.useRef(null);

  React.useEffect(() => {
    const typewriter1 = new Typewriter(typewriterRef1.current, {
      strings: [
        'Full Stack Web Developer',
        'Software Engineer',
        'Network Enthusiast',
        'DevOps Practitioner',
        'Cloud Architect',
        'Cybersecurity Enthusiast',
        'Low level/logic Enthusiast'
      ],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50,
      pauseFor: 1500,
    });

    typewriter1.start();

    const typewriter2 = new Typewriter(typewriterRef2.current, {
      strings: [
        'a responsive website',
        'a full-stack web app',
        'a user authentication system',
        'a cloud-based solution',
        'a real-time chat application',
        'an interactive dashboard',
        'a custom API integration',
        'a robust backend architecture',
        'a microservices-based infrastructure',
        'a server side application (ssr)',
        'a personalized user experience',
        'a modern looking ui',
        'a lot more!'
      ],             
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50,
      pauseFor: 1500,
    });

    typewriter2.start();

    return () => {
      typewriter1.stop();
      typewriter2.stop();
    };
  }, []);

  return (
    <div className="home section">
      <h1>Hi, my name is</h1>
      <h2>Kotsasmin</h2>
      <h1>I am a</h1>
      <ReactAnimation />

      <h3 ref={typewriterRef1}></h3>


      <h1>I can build you</h1>
      <h3 ref={typewriterRef2}></h3>

      <div className="buttons">
        <Slogan />

        <div className="center-container">
          <Link to="/about" className="no-underline">
            <div className="contact-me-now-btn">
              <span className="text">Check out my skills!</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

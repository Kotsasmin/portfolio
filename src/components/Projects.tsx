import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <div className="projects section">
      <h2>
        <FontAwesomeIcon icon={faProjectDiagram} /> Projects
      </h2>
      <p>Here are some of my most notable projects:</p>
      <h4 className="soon-available">
        Many more projects are on the way! Check out my GitHub for more as I post more of my stuff there.
      </h4>

      <div className="project-list">

        <div className="project-item">
          <h3>Dashboard</h3>
          <p>
            An all-in-one modern-looking dashboard for note-taking, web searching, Pomodoro timer,
            weather forecast, and website shortcuts.
          </p>
          <ul className="tech-list">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
          <div className="project-buttons">
            <a href="https://dashboard.kotsasmin.dev" target="_blank" rel="noopener noreferrer">
              <button>Demo</button>
            </a>
            <a href="https://github.com/Kotsasmin/dashboard" target="_blank" rel="noopener noreferrer">
              <button>Source Code</button>
            </a>
          </div>
        </div>

        <div className="project-item">
          <h3>Personal Portfolio</h3>
          <p>A personal portfolio website showcasing my skills, projects, and contact information.</p>
          <ul className="tech-list">
            <li>React</li>
            <li>Vite</li>
            <li>Nginx</li>
          </ul>
          <div className="project-buttons">
            <a href="https://kotsasmin.dev/" target="_blank" rel="noopener noreferrer">
              <button>Demo</button>
            </a>
            <a href="https://github.com/Kotsasmin/portofolio" target="_blank" rel="noopener noreferrer">
              <button>Source Code</button>
            </a>
          </div>
        </div>


        <div className="project-item">
          <h3>PageNest</h3>
          <p>
            A full-stack web app designed to maximize the potential of your notes. With a sleek, modern
            interface, it allows users to seamlessly save, organize, and access notes from any device,
            anywhere. Whether it's text, ideas, or experiences, this app empowers users to capture and
            manage their thoughts effortlessly. (Demo page data is reset every 24 hours)
          </p>
          <ul className="tech-list">
            <li>React</li>
            <li>Next.js</li>
            <li>PocketBase</li>
            <li>Shadcn</li>
            <li>Tailwind</li>
          </ul>
          <div className="project-buttons">
            <a href="https://pagenest.kotsasmin.dev" target="_blank" rel="noopener noreferrer">
              <button>Demo</button>
            </a>
            <a href="https://github.com/Kotsasmin/pagenest" target="_blank" rel="noopener noreferrer">
              <button>Source Code</button>
            </a>
          </div>
        </div>


        <div className="project-item">
          <h3>Ambient Player</h3>
          <p>My humble attempt to recreate YouTube's ambient effect using TypeScript's useEffect.</p>
          <ul className="tech-list">
            <li>React</li>
            <li>TypeScript</li>
          </ul>
          <div className="project-buttons">
            <a href="https://ambient.kotsasmin.dev" target="_blank" rel="noopener noreferrer">
              <button>Demo</button>
            </a>
            <a href="https://github.com/Kotsasmin/ambient-player" target="_blank" rel="noopener noreferrer">
              <button>Source Code</button>
            </a>
          </div>
        </div>


        <div className="project-item">
          <h3>Any Converter</h3>
          <p>
            A prototype web app for converting video files and more from the web. Not finished in any
            way.
          </p>
          <ul className="tech-list">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>ffmpeg</li>
          </ul>
          <div className="project-buttons">
            <button disabled>Demo (N/A)</button>
            <a href="https://github.com/Kotsasmin/any-converter" target="_blank" rel="noopener noreferrer">
              <button>Source Code</button>
            </a>
          </div>
        </div>


        <div className="project-item">
          <h3>Modiva Launchers</h3>
          <p>
            A soon to launch project offering custom Minecraft launchers automating setup, simplifying server access, and enhancing player and server owner experiences.
          </p>
          <ul className="tech-list">
            <li>Next.js</li>
            <li>Vite</li>
            <li>Tauri</li>
            <li>Rust</li>
            <li>SQLite</li>
          </ul>
          <div className="project-buttons">
            <a href="https://discord.gg/fBuX7wP4Xj" target="_blank" rel="noopener noreferrer">
              <button>Discord Server</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
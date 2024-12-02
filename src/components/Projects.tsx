import '../styles/Projects.css'; import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; import {faProjectDiagram} from '@fortawesome/free-solid-svg-icons'; function Projects() { return ( <div className="projects section">
    <h2>
      <FontAwesomeIcon icon={faProjectDiagram} /> Projects
    </h2>
    <p>Here are some of my most notable projects:</p>
<h4 className="soon-available">Many more projects are on the way! Check out my GitHub for more as I post more of my stuff there.</h4>
    <div className="project-list">
      <div className="project-item">
      <a href="https://kotsasmindashboard.netlify.app/" target="_blank" rel="noopener noreferrer" className="dashboard-link">
        <h3>Dashboard</h3>
        <p>An all-in-one modern-looking dashboard for note-taking, web searching, Pomodoro timer, weather forecast, and website shortcuts.</p>
        <ul className="tech-list">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
        </a>
      </div>
      <div className="project-item">
      <a href="https://github.com/Kotsasmin/portofolio" target="_blank" rel="noopener noreferrer" className="dashboard-link">
        <h3>Personal Portfolio</h3>
        <p>A personal portfolio website showcasing my skills, projects, and contact information.</p>
        <ul className="tech-list">
          <li>React</li>
          <li>Vite</li>
          <li>Nginx</li>
        </ul>
        </a>
      </div>
      <div className="project-item">
      <a href="https://github.com/Kotsasmin/pagenest" target="_blank" rel="noopener noreferrer" className="dashboard-link">
        <h3>PageNest</h3>
        <p>A full-stack web app designed to maximize the potential of your notes. With a sleek, modern interface, it allows users to seamlessly save, organize, and access notes from any device, anywhere. Whether it's text, ideas, or experiences, this app empowers users to capture and manage their thoughts effortlessly.</p>
        <ul className="tech-list">
          <li>React</li>
          <li>Next.js</li>
          <li>PocketBase</li>
          <li>Shadcn</li>
          <li>Tailwind</li>
        </ul>
        </a>
      </div>
      {/*
      <div className="project-item">
        <h3>HomeLab Automation</h3>
        <p>A fully automated HomeLab system that can scale from a single Raspberry Pi to a large computing setup. There will be installation of CasaOS, proxies, containers, DNS servers, file hosting, and a central management dashboard.</p>
        <ul className="tech-list">
          <li>Docker</li>
          <li>CasaOS</li>
          <li>DNS server/filter</li>
          <li>Status Dashboard</li>
          <li>NGINX</li>
          <li>DDNS Setup</li>
          <li>Firewall</li>
        </ul>
        <p>Project link coming soon</p>
      </div>*/}
    </div>
  </div> ); } export default Projects;
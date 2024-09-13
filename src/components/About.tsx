import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const handleUniversityClick = () => {
  window.open('https://dit.uth.gr', '_blank');
};

function About() {
  const technologies = [
    // Front-End Development
    { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://react.dev/' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', url: 'https://nextjs.org/' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com/' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com/' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
    { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg', url: 'https://www.electronjs.org/' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', url: 'https://vitejs.dev/' },
  
    // Back-End Development
    { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', url: 'https://www.python.org/' },
    { name: 'PocketBase', icon: 'https://pocketbase.io/images/logo.svg', url: 'https://pocketbase.io/' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
  
    // Version Control and Collaboration
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', url: 'https://git-scm.com/' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', url: 'https://github.com/' },
  
    // Scripting and Command Line
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', url: 'https://www.gnu.org/software/bash/' },
    { name: 'Batch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', url: 'https://en.wikipedia.org/wiki/Batch_file' },
    { name: 'Powershell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg', url: 'https://docs.microsoft.com/en-us/powershell/' },
  
    // Operating Systems
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', url: 'https://www.kernel.org/' },
    { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg', url: 'https://www.microsoft.com/en-us/windows/' },
  
    // Code Editors
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com/' },
    { name: 'Nano', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nano/nano-original.svg', url: 'https://www.nano-editor.org/' },
  
  ];

  return (
    <div className="about section">
      <h2><FontAwesomeIcon icon={faUser} /> About</h2>
      <div className="about-content">
        <img src="images/profile.png" alt="Kotsasmin" className="profile-pic" />
        <div className="about-text">
          <h3>Who is this guy?</h3>
          <p>I am Kotsasmin, an 18-year-old full-stack web developer from Greece with 5+ years of computer/programming experience. Currently, I am a student at the{' '}
            <strong>
              <em onClick={handleUniversityClick} style={{ cursor: 'pointer' }}> Department of Informatics and Telecommunications of the University of Thessaly </em>
            </strong>.
          </p>
          <p>I'm eager to engage in a diverse range of projects, from building basic websites to developing full-stack desktop applications with custom backends and authentication systems. I am particularly interested in contributing to innovative and complex applications. My skill set spans both front-end and back-end technologies, as detailed below, and I am experienced in creating user interfaces that are both intuitive and visually appealing. My primary operating system is Linux, although I also use Windows for development purposes. Feel free to ask me any questions you might have.</p>
          <h1>Technologies that I use:</h1>
        </div>
      </div>
      <div className="technologies-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item" onClick={() => window.open(tech.url, '_blank')} style={{ cursor: 'pointer' }}>
            <img src={tech.icon} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

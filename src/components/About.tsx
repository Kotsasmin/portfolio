import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Card from './Card.tsx';
import { useState } from 'react';

const handleUniversityClick = () => {
  window.open('https://dit.uth.gr', '_blank');
};

function About() {
  const [isHovered, setIsHovered] = useState(false);

  const technologies = [
    { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://react.dev/' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', url: 'https://nextjs.org/' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com/' },
    { name: 'Shadcn', icon: 'https://ui.shadcn.com/favicon.ico', url: 'https://ui.shadcn.com/' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com/' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
    { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg', url: 'https://www.npmjs.com/'},
    { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg', url: 'https://www.electronjs.org/' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', url: 'https://vitejs.dev/' },
    { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg', url: 'https://jquery.com/' },
    { name: 'Axios', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg', url: 'https://axios-http.com/' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', url: 'https://gcc.gnu.org/' },
    { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', url: 'https://www.python.org/' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg', url: 'https://www.sqlite.org/' },
    { name: 'PocketBase', icon: 'https://pocketbase.io/images/logo.svg', url: 'https://pocketbase.io/' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', url: 'https://nginx.org/en/' },
    { name: 'CLoudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg', url: 'https://www.cloudflare.com/'},
    { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg', url: 'https://apache.org/' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', url: 'https://git-scm.com/' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', url: 'https://github.com/' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', url: 'https://www.gnu.org/software/bash/' },
    { name: 'Batch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', url: 'https://en.wikipedia.org/wiki/Batch_file' },
    { name: 'Powershell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg', url: 'https://docs.microsoft.com/en-us/powershell/' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', url: 'https://www.kernel.org/' },
    { name: 'Raspberry Pi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg', url: 'https://www.raspberrypi.com/'},
    { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg', url: 'https://www.microsoft.com/en-us/windows/' },
    { name: 'Proxmox', icon: 'https://camo.githubusercontent.com/4e9e0bf3fcd09d6557b4eaa8f790ec17599ed6e8eb37a7e78adaa30650c8a6e3/68747470733a2f2f7777772e70726f786d6f782e636f6d2f696d616765732f70726f786d6f782f50726f786d6f785f73796d626f6c5f7374616e646172645f6865782e706e67', url: 'https://www.proxmox.com/en/'},
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: 'https://aws.amazon.com/' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com/' },
    { name: 'Nano', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nano/nano-original.svg', url: 'https://www.nano-editor.org/' },
  ];

  return (
    <div className="about section">
      <h2><FontAwesomeIcon icon={faUser} /> About</h2>
      <div className="about-content">
        <div
          className="profile-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src="images/profile.png" alt="Kotsasmin" className="profile-pic" />
          {isHovered && (
            <div className="card-container fade-in">
              <Card />
            </div>
          )}
        </div>
        <div className="about-text">
          <h3>Who is this guy?</h3>
          <p>
            I am Kotsasmin, an 18-year-old full-stack web developer from Greece with 5+ years of computer/programming experience. Currently, I am a student at the{' '}
            <strong>
              <em onClick={handleUniversityClick} style={{ cursor: 'pointer' }}> Department of Informatics and Telecommunications of the University of Thessaly </em>
            </strong>.
          </p>
          <p>
            I focus on full-stack web applications and enjoy developing service-oriented apps that enhance user interaction. My knowledge lies in web development, but I also work with lower-level programming languages to create efficient applications. I'm passionate about building intuitive, scalable solutions that blend user experience with technical performance. My primary development environment is Linux, though I also use Windows for specific projects. I enjoy problem-solving challenges and continuously learn new technologies in this rapidly evolving field, whatever the cost. While I’m still honing my skills, I am dedicated to learning and growing as a developer. My goal is to leverage my expertise and advancements in technology, such as AI, to create impactful solutions that add real value.
          </p>

          <p>
          I utilize a diverse tech stack to build robust and user-friendly web applications. My front-end skills include ReactJS, Next.js, and Tailwind CSS for responsive user interfaces, while my back-end development leverages Node.js and Python for efficient data handling. I also have some experience with lower-level programming languages like C and assembly. I frequently work with Proxmox and hypervisors to manage virtualized environments effectively. Though I still have a lot to learn, I implement SQLite and PocketBase for seamless data storage and retrieval and use AWS to deploy and manage my applications.</p>
          <p>
            Additionally, I use Docker for containerization, simplifying deployment across environments, and rely on Git and GitHub/Gitea for collaboration with other developers. This combination allows me to create applications that meet user needs while ensuring optimal performance and scalability. Feel free to reach out with any questions!
          </p>

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

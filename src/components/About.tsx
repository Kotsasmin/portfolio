import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Card from './Card.tsx';
import { useState } from 'react';

const handleUniversityClick = () => {
  window.open('https://dit.uth.gr/?page_id=38633&lang=en', '_blank');
};

function About() {
  const [isHovered, setIsHovered] = useState(false);

  const techGroups = [
    {
      title: 'Technologies that I use Daily',
      description: 'As a full-stack developer, I have experience in delivering feature-rich web applications, including ERP systems, e-commerce platforms, project management tools, CRM solutions, and custom web apps. I design and develop efficient, performance-driven web solutions that prioritize user experience and operational reliability. Whether developing full-featured websites, creating cloud-based systems, or managing deployment workflows, I handle all aspects of the process to ensure seamless integration and scalability. Here are the technologies that form the foundation of my daily work:',
      technologies: [
        { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://react.dev/' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', url: 'https://nextjs.org/' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com/' },
        { name: 'Shadcn', icon: 'https://ui.shadcn.com/favicon.ico', url: 'https://ui.shadcn.com/' },
        
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },


        { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg', url: 'https://www.npmjs.com/'},
        { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg', url: 'https://www.electronjs.org/' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', url: 'https://vitejs.dev/' },


        { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', url: 'https://www.python.org/' },
        { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg', url: 'https://www.sqlite.org/' },
        { name: 'PocketBase', icon: 'https://pocketbase.io/images/logo.svg', url: 'https://pocketbase.io/' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
        { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', url: 'https://nginx.org/en/' },
        { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg', url: 'https://www.cloudflare.com/' },
        { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg', url: 'https://apache.org/' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', url: 'https://git-scm.com/' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', url: 'https://github.com/' },
        { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', url: 'https://www.gnu.org/software/bash/' },
        { name: 'Batch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', url: 'https://en.wikipedia.org/wiki/Batch_file' },
        { name: 'Powershell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg', url: 'https://docs.microsoft.com/en-us/powershell/' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', url: 'https://www.kernel.org/' },
        { name: 'Arch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg', url: 'https://archlinux.org/' },
        { name: 'Proxmox', icon: 'https://camo.githubusercontent.com/4e9e0bf3fcd09d6557b4eaa8f790ec17599ed6e8eb37a7e78adaa30650c8a6e3/68747470733a2f2f7777772e70726f786d6f782e636f6d2f696d616765732f70726f786d6f782f50726f786d6f785f73796d626f6c5f7374616e646172645f6865782e706e67', url: 'https://www.proxmox.com/en/' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: 'https://aws.amazon.com/' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', url: 'https://code.visualstudio.com/' },
        { name: 'Nano', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nano/nano-original.svg', url: 'https://www.nano-editor.org/' },
      ]
    },
    {
      title: 'Technologies that I use not so often (but know how to code with them)',
      description: 'These technologies form the foundation of many full-stack applications. While not my primary focus, I use them from time to time develop and maintain functional applications. I often integrate tools from my primary technology stack when necessary to build seamless user experiences and deliver high-quality software solutions.',
      technologies: [
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com/' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', url: 'https://www.php.net/' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', url: 'https://laravel.com/' },
        { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg', url: 'https://jquery.com/' },
        { name: 'Axios', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg', url: 'https://axios-http.com/' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', url: 'https://gcc.gnu.org/' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', url: 'https://www.java.com'}
      ]
    },
    {
      title: 'Technologies I am still learning',
      description: 'I am always striving to stay ahead of the curve, which is why I am actively learning and exploring new technologies. These tools offer advanced capabilities in fields like artificial intelligence, machine learning, and embedded systems.',
      technologies: [
        { name: 'Assembly', icon: 'https://static-00.iconduck.com/assets.00/assembly-icon-1024x1024-lc5e1bk1.png', url: 'https://mips.com/' },
        { name: 'TensorFlow', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg', url: 'https://www.tensorflow.org/' },
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', url: 'https://pytorch.org/'}
      ]
    }
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
        <p>Hi, I am Kotsasmin, a 19-year-old full-stack web developer from Greece with over 6 years of experience in programming and computer science. Currently, I am a student at the <strong><em onClick={handleUniversityClick} style={{ cursor: 'pointer' }}>Department of Informatics and Telecommunications at the University of Thessaly</em></strong>. I have always had a passion for computers, and from a young age, I learned how to create simple applications and make things work on the computer. Since then, I have continued to expand my knowledge, both through my studies at university and by coding independently every day.</p>        <p>I focus on crafting scalable, intuitive platforms that integrate seamlessly with modern technologies. My expertise includes developing and managing digital environments, optimizing performance, and ensuring smooth deployment. I am always learning and staying ahead of industry trends to deliver impactful solutions.</p>
        <p>Although my schedule is often extremely tight, and I don’t have much time to spare, I always strive to make the best of myself and bring value to the world.</p>
        <p>Let’s connect and explore how I can help bring value to your business!</p>
      </div>
      {techGroups.map((group, index) => (
        <div key={index} className="tech-group">
          <h3>{group.title}</h3>
          <p>{group.description}</p>
          <div className="technologies-grid">
            {group.technologies.map((tech, idx) => (
              <div key={idx} className="tech-item" onClick={() => window.open(tech.url, '_blank')} style={{ cursor: 'pointer' }}>
                <img src={tech.icon} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;

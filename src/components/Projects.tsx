import '../styles/Projects.css';

function Projects() {
    return (
        <div className="projects section">
            <h2>Projects</h2>
            <p>Here are some of my most notable projects:</p>
            <h4 className="soon-available">The projects page is under heavy development. Github and download links will be available in the future.</h4>
            <div className="project-list">
                <div className="project-item">
                    <h3>Chat App</h3>
                    <p>A real-time web and desktop chat application with user authentication, channel creation, and lightweight database integration.</p>
                    <ul className="tech-list">
                        <li>React</li>
                        <li>Electron</li>
                        <li>TypeScript</li>
                        <li>Vite</li>
                        <li>SQLite</li>
                    </ul>
                </div>
                <div className="project-item">
                    <h3>Minecraft Launcher</h3>
                    <p>A fully functional, offline-compatible Minecraft launcher with user authentication, server quick entry, and lightweight database support.</p>
                    <ul className="tech-list">
                        <li>Electron</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>SQLite</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="project-item">
                    <h3>Server Dashboard</h3>
                    <p>A comprehensive server management tool providing usage overviews, note-taking, weather forecasting, and more.</p>
                    <ul className="tech-list">
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="project-item">
                    <h3>Personal Website</h3>
                    <p>A personal portfolio website showcasing my skills, projects, and contact information.</p>
                    <ul className="tech-list">
                        <li>React</li>
                        <li>Vite</li>
                        <li>Nginx</li>
                    </ul>
                </div>
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
                </div>
            </div>
        </div>
    );
}

export default Projects;

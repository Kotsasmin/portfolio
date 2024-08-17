import '../styles/Projects.css';

function Projects() {
    return (
        <div className="projects section">
            <h2>Projects</h2>
            <p>Here are some of my most notable projects:</p>
            <div className="project-list">
                <div className="project-item">
                    <h3>Project A</h3>
                    <p>A web application for managing tasks.</p>
                </div>
                <div className="project-item">
                    <h3>Project B</h3>
                    <p>An e-commerce platform with advanced features.</p>
                </div>
                <div className="project-item">
                    <h3>Project C</h3>
                    <p>A social networking site with real-time chat.</p>
                </div>
                <div className="project-item">
                    <h3>Project D</h3>
                    <p>Snake game</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;

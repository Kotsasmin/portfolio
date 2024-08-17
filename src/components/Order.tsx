
import '../styles/Order.css';

function Projects() {

    const isAvailable = true

    return (
        <div className="order section">
            <div className="status-title">Status</div>
            <div className={isAvailable ? 'status-available' : 'status-not-available'}>
                {isAvailable ? 'Available' : 'Not Available'}
            </div>
            {!isAvailable && (
                <div className="status-text">
                    Please come back later in a few days.
                </div>
            )}
            {isAvailable && (
                <div className="status-text">
                Store will open soon...
                </div>
            )}
        </div>
    );
}

export default Projects;


import '../styles/Order.css';

function Projects() {

    const isAvailable = false

    return (
        <div className="order section">
            <div className="status-title">Status</div>
            <div className={isAvailable ? 'status-available' : 'status-not-available'}>
                {isAvailable ? 'Available' : 'Not Available'}
            </div>
            {!isAvailable && (
                <div className="status-text">
                    Please come back later in a few days or try to contact me.
                </div>
            )}
            {isAvailable && (
                <div className="status-text">
                Store has been transfered to only Discord Direct Messages and Email.
                </div>
            )}
        </div>
    );
}

export default Projects;

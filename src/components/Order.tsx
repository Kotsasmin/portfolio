import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import '../styles/Order.css';

function Projects() {

    const isAvailable = false

    return (
        <div className="order section">
            <h2><FontAwesomeIcon icon={faCartShopping} /> Order</h2>
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
                The store is currently available through Discord Direct Messages and email.
                </div>
            )}
        </div>
    );
}

export default Projects;

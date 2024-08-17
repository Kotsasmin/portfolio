import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faCartShopping} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
        <li><Link to="/about"><FontAwesomeIcon icon={faUser} /> About</Link></li>
        <li><Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</Link></li>
        <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></li>
        <li><Link to="/order"><FontAwesomeIcon icon={faCartShopping} /> Order</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

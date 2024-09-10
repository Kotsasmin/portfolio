import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /><span> Home</span></Link></li>
        <li><Link to="/about"><FontAwesomeIcon icon={faUser} /><span> About</span></Link></li>
        <li><Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /><span> Projects</span></Link></li>
        <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /><span> Contact</span></Link></li>
        <li><Link to="/order"><FontAwesomeIcon icon={faCartShopping} /><span> Order</span></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

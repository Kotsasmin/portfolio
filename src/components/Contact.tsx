import '../styles/Contact.css';
import ContactItems from './ContactItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <div className="contact section">
      <h2><FontAwesomeIcon icon={faEnvelope} /> Contact Info</h2>
      <h3>Want to work together, or get in touch?</h3>
      <h4>I mostly use Email for contacting clients</h4>
      <ContactItems />
    </div>
  );
}

export default Contact;

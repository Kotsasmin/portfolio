import '../styles/Contact.css';
import ContactItems from './ContactItems';


function Contact() {
  return (
    <div className="contact section">
      <h2>Contact Info</h2>
      <h3>Want to work together, or get in touch?</h3>
      <h4>I mostly use Email for contacting clients</h4>
      <ContactItems />
    </div>
  );
}

export default Contact;

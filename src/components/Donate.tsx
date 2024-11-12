import React from 'react';
import '../styles/Donate.css';
const Donate: React.FC = () => {
  return (
    <div className="donate-button-container">
      <a
        href="https://www.paypal.me/kotsasmin"
        className="donate-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-paypal">Donate</i>
      </a>
    </div>
  );
};
export default Donate;

import './buttons.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Button = () => {
  return (
    <div className="button-container">
      <button className="email">
        <FaEnvelope size={16} style={{ marginRight: '8px' }} />
        Email
      </button>
      <button className="linkedin">
        <FaLinkedin size={16} style={{ marginRight: '8px' }} />
        Linkedin
      </button>
    </div>
  );
};

import './footer.css';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="social-media-buttons">
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} color="#0e76a8" />
      </a>
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={24} color="#1DA1F2" />
      </a>
      <a
        href="https://facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} color="#1877F2" />
      </a>
      <a
        href="https://instagram.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} color="#E4405F" />
      </a>
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} color="#333" />
      </a>
    </div>
  );
};

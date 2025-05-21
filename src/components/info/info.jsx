import profilePicture from '../../images/profile.jpg';
import './info.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export const Info = () => {
  return (
    <>
      <div>
        <div className="profile_picture-container">
          <img className="profile_picture" src={profilePicture} alt="Profile" />
        </div>
        <div className="title_container">
          <h1 className="title">Laura Smith</h1>
          <h3 className="subtitle">Frontend Developer</h3>
          <small>laura.smith.website</small>
        </div>
      </div>
      <div className="top-social-media-buttons ">
        <button className="email">
          <FaEnvelope size={16} style={{ marginRight: '8px' }} />
          Email
        </button>
        <button className="linkedin">
          <FaLinkedin size={16} style={{ marginRight: '8px' }} />
          Linkedin
        </button>
      </div>
    </>
  );
};
export default Info;

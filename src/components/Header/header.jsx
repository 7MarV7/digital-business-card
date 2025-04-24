import profilePicture from '../../images/profile.jpg';
import './header.css';

export const Header = () => {
  return (
    <div className="profile_picture-container">
      <img className="profile_picture" src={profilePicture} alt="Profile" />
    </div>
  );
};
export default Header;

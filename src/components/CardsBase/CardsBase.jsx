import './CardsBase.css';
import { Header } from '../Header/header.jsx';

export const CardsBase = () => {
  return (
    <div className="cards-basebackground">
      <div className="card">
        <Header />
        <div className="card__content">
          <p className="card__description">
            Create and share your digital business card with ease.
          </p>
        </div>
        <div className="card__footer">
          <p className="card__footer-text">© 2023 Your Company</p>
        </div>
      </div>
    </div>
  );
};

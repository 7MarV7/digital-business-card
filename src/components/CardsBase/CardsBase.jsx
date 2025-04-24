import './CardsBase.css';
import { Header } from '../Header/header.jsx';
import { HeaderTitle } from '../title/title.jsx';

export const CardsBase = () => {
  return (
    <div className="cards-basebackground">
      <div className="card">
        <Header />
        <div className="card__description">
          <HeaderTitle />
        </div>
        <div className="card__footer">
          <p className="card__footer-text">© 2023 Your Company</p>
        </div>
      </div>
    </div>
  );
};

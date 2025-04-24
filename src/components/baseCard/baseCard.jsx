import './baseCard.css';
import { Header } from '../header/header.jsx';
import { HeaderTitle } from '../title/title.jsx';
import { Button } from '../buttons/buttons.jsx';

export const BaseCard = () => {
  return (
    <div className="cards-basebackground">
      <div className="card">
        <Header />
        <div className="card__description">
          <HeaderTitle />
        </div>
        <div className="card__buttons">
          <Button />
        </div>
        <div className="card__footer">
          <p className="card__footer-text">© 2023 Your Company</p>
        </div>
      </div>
    </div>
  );
};

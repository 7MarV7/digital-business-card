import './CardsBase.css';

export const CardsBase = () => {
  return (
    <div className="cards-basebackground">
      <div className="card">
        <div className="card__header">
          <h1 className="card__title">Digital Business Card</h1>
          <p className="card__subtitle">Your digital identity</p>
        </div>
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

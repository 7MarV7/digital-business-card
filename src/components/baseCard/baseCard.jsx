import './baseCard.css';
import { Header } from '../header/header.jsx';
import { HeaderTitle } from '../title/title.jsx';
import { Button } from '../buttons/buttons.jsx';
import { About } from '../about/about.jsx';
import { Interest } from '../interest/interest.jsx';
import { SocialMediaButtons } from '../socialMediaButtons/socialMediaButtons.jsx';

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
        <div className="about__container">
          <About />
        </div>
        <div className="interest__container">
          <Interest />
        </div>
        <div className="card__footer">
          <SocialMediaButtons />
        </div>
      </div>
    </div>
  );
};

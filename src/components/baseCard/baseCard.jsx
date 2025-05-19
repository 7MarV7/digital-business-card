import { Info } from '../info/info';
import { About } from '../about/about';
import { Interest } from '../interest/interest';
import { Footer } from '../footer/footer';
import './baseCard.css';

export const BaseCard = () => {
  return (
    <div className="base-card">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
};

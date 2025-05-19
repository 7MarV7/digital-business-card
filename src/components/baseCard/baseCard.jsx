import { Info } from '../info/info';
import { About } from '../about/about';
import { Interest } from '../interest/interest';
import { Footer } from '../footer/footer';

export const BaseCard = () => {
  return (
    <div>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
};

import type{ NextPage } from 'next';



import {
  Banner,
  Trending,
  FeaturedDestinations,
  Testimonials,
  Footer,
  Card,
} from '../components';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return(
  <>
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Banner />
      <Card
        title="Explore the Lakeside city"
        buttonLabel="Learn more"
        subtitle="Kisumu is the third largest city in Kenya. Strategically located by the lakeside, activites for tourists range from minute long boatrides to hour long island trips
        as well as fishing, bird-wacthing, you name it.......!"
        image="/lotter/100767-travel-tour.gif"
      />
      <FeaturedDestinations />
      <Card
        reversed
        title="Guides by "
        buttonLabel="Download"
        subtitle="Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip."
        image="/images/guide.png"
      />
      <Testimonials />
      <Trending />
    </div>
    <Footer />
  </>
)};

export default Home;
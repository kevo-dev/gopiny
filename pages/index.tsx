import type{ NextPage } from 'next';
import { Carousel1 } from '../components/Carousel'


import {
  Banner,
  Trending,
  FeaturedDestinations,
  Testimonials,
  Footer,
  Card,
} from '../components';
import Navbar from '../components/Navbar';
import { PeopleReview } from '../components/Review';

const Home: NextPage = () => {
  return(
  <>
    <div className="m-4 overflow-hidden">
      <Navbar />
      <Carousel1 />
      <Banner />
      <Card
        title="Explore the Lakeside city"
        buttonLabel="Learn more"
        subtitle="Kisumu is the third largest city in Kenya. Strategically located by the lakeside, activites for tourists range from minute long boatrides to hour long island trips
        as well as fishing, bird-wacthing, you name it.......!"
        image="/lotter/95019-fishing-bye-bye.gif"
      />
      <FeaturedDestinations />
      <Card
        reversed
        title="Plan your epic tour with us"
        buttonLabel="Book"
        subtitle="Traverse this lake-side city by boat or car, we've got you covered"
        image="/images/guide.png"
      />
      <PeopleReview />
      <Trending />
    </div>
    <Footer />
  </>
)};

export default Home;
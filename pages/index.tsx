import type{ NextPage } from 'next';
import { Carousel1 } from '../components/Carousel'


import {
  Trending,
  Testimonials,
  Footer,
  Card,
  FeaturedTours,
} from '../components';
import Navbar from '../components/Navbar';
import { Hero2 } from '../components/Hero2';
import  Banner  from '../components/Banner';
import { Hero } from '../components/Hero';
import { Featured } from '../components/Featured';

import { PeopleReview } from '../components/Review';
import Header from '../components/Header';
import dynamic from 'next/dynamic';

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

const Home: NextPage = () => {
  return(
  <>
    <div className="max-w-full gradient  ">
      
      <Banner />
      <Navbar />
      <Carousel1 /> 
      
      <Card
        
        title="Plan your epic tour with us"
        buttonLabel="Book with us"
        subtitle="We offer an all-rounded travel experience. From a simple three hour-long boat-ride to a week-long tour with multiple destinations and pleasurable experiences."
        image="/images/testimonial.png"
      />
      <FeaturedTours />
      <PeopleReview />
      
      <Trending />
    
      <Footer />
    </div>
    
  </>
)};

export default Home;
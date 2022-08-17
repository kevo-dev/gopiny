import type{ NextPage } from 'next';
import { Carousel1 } from '../components/Carousel'


import {
  Banner,
  Trending,
  Testimonials,
  Footer,
  Card,
  FeaturedTours,
} from '../components';
import Navbar from '../components/Navbar';
import { Hero2 } from '../components/Hero2';
import { Hero } from '../components/Hero';
import { Featured } from '../components/Featured';

import { PeopleReview } from '../components/Review';
import Header from '../components/Header';
import dynamic from 'next/dynamic';

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

const Home: NextPage = () => {
  return(
  <>
    <div className=" mx-auto ">
      
      <Navbar />
      <Carousel1 /> 
      
      <Card
        
        title="Plan your epic tour with us"
        buttonLabel="Book with us"
        subtitle="There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly."
        image="/images/testimonial.png"
      />
      <FeaturedTours />
      <PeopleReview />
      
      <Trending />
      <AblyChatComponent />
      <Footer />
    </div>
    
  </>
)};

export default Home;
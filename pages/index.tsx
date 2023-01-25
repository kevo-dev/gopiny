import type{ NextPage } from 'next';
import {HeroSlide } from '../components/Carousel'




import  Featured  from '../components/Featured';

import { PeopleReview } from '../components/Review';
import Card2 from '../components/Card2';

import PortfolioGrid from '../components/Portfolio';
import Carousel from 'react-multi-carousel';
import Promo from '../components/Promo';
import Projects from '../components/Portfolio';
import { Base } from '../components/layout/Base';
import { FeaturedTours } from '../components/FeaturedTours';
import { Contact } from '../components/Contact';
import CTASection from '../components/CTASection';
import About from '../components/About';
import Trending from '../components/Trending';
import Contact2 from '../components/Contact2';
import Trending2 from '../components/Trending2';
import Promo2 from '../components/Promo2';

const Home: NextPage = () => {
  return(
  <>
  <Base>
  <HeroSlide />
  <FeaturedTours />
  
  <About />
  <Promo2 />
  <Trending2 />
  <Contact2 />
  </Base>
   
  
  </>
)};

export default Home;
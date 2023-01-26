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
import Hero from '../components/Hero';
import Popular_Tours from '../components/Popular_Tours';
import ProductGrid from '../components/ProductGrid';

const Home: NextPage = () => {
  return(
  <>
  <Base>
  <Hero />
  <Popular_Tours />
  <About />
  
  <ProductGrid />
  <PeopleReview />
  <Trending2 />
  <Promo2 />
  <Contact2 />
  </Base>
   
  
  </>
)};

export default Home;
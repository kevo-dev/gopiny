import type{ NextPage } from 'next';
import {HeroSlide } from '../components/Carousel'



import Navbar from '../components/Navbar';

import  Hero  from '../components/Hero';
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

const Home: NextPage = () => {
  return(
  <>
  <Base>
  <HeroSlide />
  <FeaturedTours />
  <About />
  <PeopleReview />
  <CTASection />
  <Contact />
  </Base>
   
  
  </>
)};

export default Home;
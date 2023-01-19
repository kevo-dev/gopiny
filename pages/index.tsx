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

const Home: NextPage = () => {
  return(
  <>
  <Base>
  <HeroSlide />
  <FeaturedTours />
  <PeopleReview />
  <Promo />
  </Base>
   
  
  </>
)};

export default Home;
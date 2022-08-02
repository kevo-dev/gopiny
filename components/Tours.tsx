
import { Base }  from '../components/layout/Base'
import { Section }  from '../components/layout/Section'
import { AppConfig } from '../utils/AppConfig';
import CategoryFilter from './CategoryFilter';
import CategoryPreview from './CategoryPreview';
import { FeaturedTours } from './FeaturedDestinations/FeaturedTours';
import ProductList from './ProductList';
import ProductListSimple from './ProductListSimple';
import ProductOverview from './ProductOverview';



const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Wildlife', 'Sight-seeing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];




const dataReview = [
    {
      image_url: '/native/ndere-island.jpg',
      name: '$-100',
      description:'Island',
      duration:'9 HOURS',
    },
    {
      image_url: '/native/kit-mikayi.jpg',
      name: '$-100',
      description:'Culture',
      duration:'9 HOURS',
    },
    {
      image_url: '/native/game-park.jpg',
      name: '$-100',
      description:'Game',
      duration:'9 HOURS',
    },
    {
      image_url: '/hero/herop.jpg',
      name: '$-100',
      description:'Hippos',
      duration:'9 HOURS',
    },
    
    {
      image_url: '/hero/herop.jpg',
      name: '$-100',
      description:'Hippos',
      duration:'9 HOURS',
    },
  ];


const Tours = () => {
    return(

    
    <Section>
    <div className="flex w-screen bg-blue-600">

<div className="w-full h-full relative flex items-center justify-center py-24">

  <img aria-label="no idea" src="/native/cleanlake.jpg" className="absolute object-cover w-full h-full"/>

  <div className="px-6 max-w-4xl relative z-10 text-center">
    <h1 className="text-3xl md:text-4xl font-black text-[#02044A] leading-tight pl-0 mb-2">About Us</h1>
  </div>

</div>

</div>
   
   <FeaturedTours />

    </Section>

   
    )
};

export { Tours };
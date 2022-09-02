
import { ReactNode, useState } from 'react'
import { ChevronUpIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ClockIcon, LocationMarkerIcon, TagIcon, UserIcon, UsersIcon } from '@heroicons/react/outline';
import { Carousel1 } from './Carousel';
import { Section } from './layout/Section';


  type IImageGalleryProps = {
    name?: string,
    img?: string,
    price?: string,
    title?: string,
    description?: string,
    _id?: string

    
  };
  const activities = ['Wildlife', 'Sight-seeing'];
  


const product = {

 
  images: [
    {
      src: '/native/beaubirds.jpg',
      alt: 'Flying birds.',
    },
    {
      src: '/native/lakepano1.jpg',
      alt: 'Lake and city',
    },
    {
      src: '/native/boat_rides.jpg',
      alt: 'Family on a boat.',
    },
    {
      src: '/native/about1.jpg',
      alt: 'People on a boat.',
    },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function TourDetails(props:IImageGalleryProps){
  

  return (
    <Section>
    <div className=" py-8">
      <div className="pt-6">


        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidde
          n lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
    </Section>
  )
};


import { ReactNode, useState } from 'react'
import { ChevronUpIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ClockIcon, LocationMarkerIcon, TagIcon, UserIcon, UsersIcon } from '@heroicons/react/outline';
import { Carousel1 } from './Carousel';
import { Section } from './layout/Section';


  type ITourDetailsProps = {
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

export default function TourDetails(props:ITourDetailsProps){
  

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
        










        {/* Product info */}
        <div className="max-w-2xl  mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="flex  flex-col md:flex-row py-16 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 justify-center">
            <h1 className="text-2xl mr-24 mb-8 font-extrabold tracking-tight text-orange-300 sm:text-3xl">{props.name}</h1>
            
            <UserIcon className="h-10 w-10 text-white my-2 bg-orange-600" aria-hidden="true" /><div className="flex  flex-col "><p className="font-bold text-lg text-orange-300 ">Age</p><p className="text-orange-300 font-semibold">12+</p></div>
            <ClockIcon className="h-10 w-10 text-white my-2 bg-orange-600" aria-hidden="true" /><div className="flex  flex-col "><p className="font-bold text-lg text-orange-300">Duration</p><p className="font-semibold text-orange-300">8 Hours</p></div>
            <LocationMarkerIcon className="h-10 w-10 my-2 font-bold text-white bg-orange-600" aria-hidden="true" /><div className="flex  flex-col "><p className="font-bold text-lg text-orange-300">Location</p><p className="font-semibold text-orange-300">Dunga</p></div>
            <TagIcon className="h-10 w-10 font-bold my-2 bg-orange-600 text-white" aria-hidden="true" /><div className="flex  flex-col "><p className="font-bold text-lg text-orange-300">Tour Type</p><p className="font-semibold text-orange-300">Adventure/Wildlife </p></div>
            
          </div>

          

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-lg font-bold text-orange-200">${props.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-orange-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-orange-100 hover:text-orange-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10 bg-gray-300 w-full mx-auto  rounded-lg hidden md:block">
              {/* Colors */}


              <fieldset className=" ml-4 mx-auto mb-4">
              <label htmlFor="where" className="block text-md text-gray-900 mt-2 mb-2">Where to</label>
              <input id="where" type="text" className="block w-11/12 rounded-sm  bg-white py-2 px-3 text-xl" name="destination" placeholder="Enter key-words" />
              </fieldset>
              
              <fieldset className="ml-4 mb-4">
              <label htmlFor="when" className="block text-sm text-gray-900 mb-2">When</label>
              <input id="when" type="date" className="block w-11/12 rounded-sm  bg-white py-2 px-3 text-xl" name="date" />
              </fieldset>
                
              <fieldset className="ml-4 ">
              <label htmlFor="type" className="block text-sm text-gray-900 mb-2">Type</label>
              <select id="type" className="block w-11/12 rounded-sm bg-white py-2 px-3 text-xl">
              <option>Adventure</option>
              {activities.map((activity, index) => (
              <option value={activity} key={index}>
                        {activity}
                      </option>
                    ))}
                  </select>
              </fieldset>
                      
            

                

              <button
                type="submit"
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Book 
              </button>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-white">{props.description}</p>
              </div>
            </div>

            

            <div className="mt-10">
              <h2 className="text-sm font-medium text-orange-400">Details</h2>

              
            </div>
          </div>
        </div>
      </div>
    </div>
    </Section>
  )
};

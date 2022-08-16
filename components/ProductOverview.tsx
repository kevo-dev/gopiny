
import { ReactNode, useState } from 'react'
import { ChevronUpIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ClockIcon, LocationMarkerIcon, TagIcon, UserIcon, UsersIcon } from '@heroicons/react/outline';


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
  name: 'Tour1',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Tours', href: '#' },
    { id: 2, name: 'Island Trips', href: '#' },
  ],
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
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
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
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

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
          <div className="flex  flex-col md:flex-row py-16 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 bg-gray-300 justify-center">
            <h1 className="text-2xl mr-24 font-extrabold tracking-tight text-gray-900 sm:text-3xl">{props.name}</h1>
            
            <UserIcon className="ml-8 auto top-0 mt-0 h-20 w-20 bg-blue-600" aria-hidden="true" /><div className="flex  flex-col "><p className="font-bold text-lg">Age</p><p className="font-semibold">12+</p></div>
            <ClockIcon className="top-20 h-16 w-16 bg-blue-600" aria-hidden="true" />Duration 6 Hours
            <LocationMarkerIcon className="h-16 w-16 bg-blue-600 font-bold" aria-hidden="true" />Dunga
            <TagIcon className="h-16 w-16 bg-blue-600 font-bold" aria-hidden="true" />Adventure
            
          </div>

          

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{props.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
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
                <p className="text-base text-gray-900">{props.description}</p>
              </div>
            </div>

            

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

import { Star } from "../svgs";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // More products...
  ]

  const dataReview = [
    {
      image_url: '/native/ndere-island.jpg',
      name: '$-100',
      description:'Day break in Lake Victoria',
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
      image_url: '/native/city_walk.jpeg',
      name: '$-100',
      description:'City',
      duration:'9 HOURS',
    },
  ];
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-4xl mx-auto lg:max-w-7xl ">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Most Popular Tours</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 ">
          {dataReview.map((item, _key) => (
            <div className="bg-white mx-4 border-2 border-blue rounded-lg">
              <img
                    src={item.image_url}
                    alt=""
                    className="h-80 w-full  mx-auto object-fit rounded-lg"
              />
                    <div className="flex items-center py-4 justify-left">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star size={16} color="#FFBB0C" key={index} />
            ))}
        </div>
              <p className="absolute leading-relaxed italic font-bold text-blue-800 bg-white  text-2xl mt-4">
                {item.description}
              </p>              
              
                  <h4 className="mt-16 text-xl font-bold py-2">{item.name}<span className="font-thin">/Per Person</span></h4>
                  <p className="mt-4 py-2 pl-2 mx-auto bg-gray-200 w-1/2 ml-0">{item.duration}</p>
            </div>
              
      
          ))}
          </div>
        </div>
      </div>
    )
  }
  
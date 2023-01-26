import { Section } from "./layout/Section"

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
      name: 'Boat-Rides',
      price: '$32',
      href: '#',
      imageSrc: '/native/boatridem.jpg',
      imageAlt: "Tour Photo",
    },
    {
      id: 2,
      name: 'Island Trips',
      price: '$32',
      href: '#',
      imageSrc: '/native/islandtrip.jpg',
      imageAlt: "Tour Photo",
    },
    {
      id: 3,
      name: 'Game-Viewing',
      price: '$32',
      href: '#',
      imageSrc: '/hero/heros2.jpg',
      imageAlt: "Tour Photo",
    },
      
    // More products...
  ]
  
  export default function Popular_Tours() {
    return (
      <Section
      text="View all"
      description="Discover New Worlds"
      title="FEATURED TOURS"
      >



      <div className="bg-white -mt-16">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            
          <div className="mt-2 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 ">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-lg text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
  
          <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
    )
  }
  
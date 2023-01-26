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
      name: 'Boat Ride',
      href: '#',
      price: '$256',
      description: 'Watch the sunrise. Board a boat at 6:00 am. Watch the sun rise from the lake....',
      options: '6 Hours',
      imageSrc: '/native/boat_rides.jpg',
      imageAlt: '',
    },
    {
      id: 2,
      name: 'Forest Trip',
      href: '#',
      price: '$256',
      description: 'A trip to Kakamega forest. The leftover of the rain forest that stretched all the way from west Africa....',
      options: '10 Hours',
      imageSrc: '/native/kkforest.jpg',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'A day in Kericho',
      href: '#',
      price: '$256',
      description: 'A day trip to Kericho tea plantations and a tea factory.',
      options: '10 Hours',
      imageSrc: '/native/kericho_tea.jpg',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'Island Trips',
      href: '#',
      price: '$256',
      description: 'A boat trip to Ndere island national park or a fishing trip around the archipelago of six smaller islands.',
      options: '10 Hours',
      imageSrc: '/native/boatrides6.jpg',
      imageAlt: '',
    },
    {
      id: 5,
      name: 'City Walk',
      href: '#',
      price: '$256',
      description: 'City tour into the Central Business District or into the Estates and Slums',
      options: '10 Hours',
      imageSrc: '/native/mainimgs2.jpeg',
      imageAlt: '',
    },
    {
      id: 5,
      name: 'Hike to the monkey rocks',
      href: '#',
      price: '$256',
      description: 'A hike to the monkey rock (1895) on the Nandi hills.',
      options: '10 Hours',
      imageSrc: '/native/monkeyrocks.jpg',
      imageAlt: '',
    },
    // More products...
  ]
  
  export default function ProductGrid() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{product.options}</p>
                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
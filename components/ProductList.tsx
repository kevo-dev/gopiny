import { Star } from "../svgs";
import { Hero } from "./Hero";
import { Hero2 } from "./Hero2";

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
const productsus = [
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

  const products = [
    {
        "name": "Day break in Lake Victoria",
        "duration": "3 Hours",
        "image_url": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?cs=srgb&dl=pexels-daniel-spase-2091351.jpg&fm=jpg",
        "price":100,
        "description": "Watch the sunrise. Board a boat at 6:00 am from---- Cruise in the lake for about an hour. Watch this as you enjoy the morning breeze in the calm waters. Mingle with the fishermen coming from night-fishing, see the hippos from their grazing, and watch birds leave their nests in the wetlands. Cruise Up an 8 1/2 km river to a local fish market. At the clients request we do a village tour."
    },
    {
        "name": "Forest trip",
        "duration": "6 Hours",
        "image_url": "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?cs=srgb&dl=pexels-kaichieh-chan-917510.jpg&fm=jpg",
        "price":200,
        "description": "A trip to Kakamega forest. The leftover of the rain forest that stretched all the way from west Africa. Its trees species, its birds, its monkeys, lovely its memories."
    },
    {
        "name": "Tabaka soapstone mines",
        "duration": "6 Hours",
        "image_url": "https://images.pexels.com/photos/5502945/pexels-photo-5502945.jpeg?cs=srgb&dl=pexels-mike-van-schoonderwalt-5502945.jpg&fm=jpg",
        "price":200,
        "description": "Leave Kisumu in the morning via Kendubay stop at Obama center to see craft work, women working on doom then a quick visit to a nearby pottery women group. Leave for the soap stones mines situated on the beautiful Kisii hills, see the, mines and craft shape. Trip back across the beautiful hills."
    },
    {
        "name": "A day in Kericho",
        "duration": "6 Hours",
        "image_url": "https://images.pexels.com/photos/4183360/pexels-photo-4183360.jpeg?cs=srgb&dl=pexels-taryn-elliott-4183360.jpg&fm=jpg",
        "price":170,
        "description": "A day trip to Kericho tea plantations and a tea factory on your way back its sugar cane fields and a visit to the famous Luanda Magere shrine and Luanda falls where he used to bath. The falls are breathtaking."
    },
    {
        "name": "Island Trips",
        "duration": "8 Hours",
        "image_url": "https://images.pexels.com/photos/13176812/pexels-photo-13176812.jpeg?cs=srgb&dl=pexels-robert-so-13176812.jpg&fm=jpg",
        "price":180,
        "description": "A boat trip to Ndere island national park or a fishing trip around the archipelago of six smaller islands."
    },
    {
        "name": "Hike to the Monkey Rocks",
        "duration": "6 Hours",
        "image_url": "https://images.pexels.com/photos/10807866/pexels-photo-10807866.jpeg?cs=srgb&dl=pexels-ma%C3%ABl-balland-10807866.jpg&fm=jpg",
        "price":200,
        "description": "A hike to the monkey rock (1895) on the Nandi hills meeting donkeys carrying goods to the market plus a lovely waterfall on to the way, to the top and have a birds view of the whole city and lake."
    },
    {
        "name": "City Walk",
        "duration": "6 Hours",
        "image_url": "/native/city_walk.jpeg",
        "price":100,
        "description": "City tour into the slums. Then in the afternoon head to the equator at Maseno on your way ba stop at kit Mikayi rock to watch the sun drop into the lake as you take a beer or something of your taste."
    },
    {
        "name": "Sango Bay day trip",
        "duration": "6 Hours",
        "image_url": "https://images.pexels.com/photos/6930343/pexels-photo-6930343.jpeg?cs=srgb&dl=pexels-tomas-wells-6930343.jpg&fm=jpg",
        "price":375,
        "description": "Leave Kisumu at 5:30am head to Luanda K'Otieno and catch a ferry boat to Mbita point. to Bird Island on your way to Takawiri with its white sand and crystals clear water. Here you swim safely. Break for lunch and later head back to Kisumu via Mbita through Homabay and Kendubay."
    },
    {
        "name": "Lake Tour",
        "duration": "3 Days Tour",
        "image_url": "https://images.pexels.com/photos/6930343/pexels-photo-6930343.jpeg?cs=srgb&dl=pexels-tomas-wells-6930343.jpg&fm=jpg",
        "price":500,
        "description": "Leave Kisumu early by boat to Ndere Island see the park, join the van at Aasat beach and head to Kit Mikayi. From kit Mikayi drive to Luanda K'Otieno. Catch the last ferry to Mbita point. Spend the night in Rusinga island and watch the lake turn into cities in the night (pressure lamps/solar light) used for fishing for tiny silver fish. Wake up, head to bird island, on to Takawiri beach for a swim and lunch, head to Mfangano island back to Mbita and head to Ruma National park reach there in the evening spend the night at Oribi guest house and in the morning take a game drive across and within the park. Leave in the evening for Kericho, spend the night there. In the morning visit the tea plantation, watch the pickers and maybe visit the factory. After lunch head to Kisumu through the sugar cane fields on to Luanda Magere shrine the great Luo warrier then to the rice fields (Ahero) on to Kisumu."
    }
   
];


  
const dataReview = [
    {
      image_url: '/native/ndere-island.jpg',
      price: '$-100',
      description:'Day break in Lake Victoria',
      duration:'9 HOURS',
    },
    {
      image_url: '/native/kit-mikayi.jpg',
      price: '$-100',
      description:'Culture',
      duration:'9 HOURS',
    },
    {
      image_url: '/native/game-park.jpg',
      price: '$-100',
      description:'Game',
      duration:'9 HOURS',
    },
    {
      image_url: '/hero/herop.jpg',
      price: '$-100',
      description:'Hippos',
      duration:'9 HOURS',
    },
    {
      image_url: '/native/city_walk.jpeg',
      price: '$-100',
      description:'City',
      duration:'9 HOURS',
    },
  ];
  
  export default function Example() {
    return (
      <div className="bg-white my-2">
        <Hero />
        <div className="max-w-4xl mx-auto lg:max-w-7xl ">
          
  
          <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 ">
          {products.map((item, _key) => (
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
                {item.name}
              </p>              
              
                  <h4 className="mt-16 text-xl font-bold py-2">{item.price}<span className="font-thin">/Per Person</span></h4>
                  <p className="mt-4 py-2 pl-2 mx-auto bg-gray-200 w-1/2 ml-0">{item.duration}</p>
            </div>
              
      
          ))}
          </div>
        </div>
        

      </div>
      
    )
  }
  
/* eslint-disable prettier/prettier */
import React from 'react';

const destinations = [
  {
    name: 'Island Trip',
    location: 'Ndere Island',
    image: '/native/ndere-island-national (1).jpg',
  },
  {
    name: 'Impala Sanctuary',
    location: 'Lakeside',
    image: '/images/destination-2.jpg',
  },
  {
    name: 'Kisumu Museum',
    location: 'Lakeside',
    image: '/images/destination-3.jpg',
  },
  {
    name: 'Kit Mikayi',
    location: 'Landside',
    image: '/images/destination-4.jpg',
  },
];

const FeaturedDestinations = () => (
  <div className="mt-18 flex-wrap h-75 bg-purple-400 ">
    <p className="text-2xl text-center font-semibold">Featured destinations</p>
    <div className="flex flex-wrap">
      {destinations.map(({ name, location, image }, index) => (
        <div className="desination-wrapper p-3 mt-1 mr-auto" key={index}>
          <div className="destination relative w-60 h-80 border-2 rounded-md cursor-pointer">
            <img src={image} alt={name} className="absolute block object-cover w-full h-full " />
            <div className="content absolute bg-white p-1 bottom-0 min-w-full">
              <p className="text-xl text-gray-800 font-semibold">{name}</p>
              <p className="text-lg text-gray-800">{location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedDestinations;

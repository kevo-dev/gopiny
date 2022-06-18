/* eslint-disable prettier/prettier */
import React from 'react';

const destinations = [
  {
    name: 'Raja Ampat',
    country: 'Indonesia',
    image: '/assets/images/destination-1.jpg',
  },
  {
    name: 'Fanjingshan',
    country: 'China',
    image: 'assets/images/destination-2.jpg',
  },
  {
    name: 'Vevey',
    country: 'Switzerland',
    image: '/assets/images/destination-3.jpg',
  },
  {
    name: 'Skadar',
    country: 'Montegero',
    image: '/assets/images/destination-4.jpg',
  },
];

const FeaturedDestinations = () => (
  <div className="mt-18 bg-purple-400 ">
    <p className="text-3xl">Featured destinations</p>
    <div className="flex flex-wrap">
      {destinations.map(({ name, country, image }, index) => (
        <div className="desination-wrapper p-3 mt-1 mr-auto" key={index}>
          <div className="destination relative w-60 h-90 ">
            <img src={image} alt={name} />
            <div className="content absolute bottom-0 h-5 min-w-10">
              <p className="text-xl text-gray-800 font-semibold">{name}</p>
              <p className="text-lg text-gray-800">{country}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedDestinations;

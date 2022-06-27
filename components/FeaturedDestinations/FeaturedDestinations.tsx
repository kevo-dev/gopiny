/* eslint-disable prettier/prettier */
import React from 'react';
import { Section } from '../layout/Section';

const destinations = [
  {
    name: 'Island Trip',
    location: 'Ndere Island',
    image: '/native/ndere-2.jpg',
  },
  {
    name: 'Impala Sanctuary',
    location: 'Lakeside',
    image: '/native/impalas.jpg',
  },
  {
    name: 'Kisumu Museum',
    location: 'Lakeside',
    image: '/native/kisumu-museum.jpg',
  },
  {
    name: 'Kit Mikayi',
    location: 'Landside',
    image: '/native/kit-mikayi.jpg',
  },
];

const FeaturedDestinations = () => (
  <Section
  title="Featured Tours"
  description="Awesome destinations"
  >
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
  
  </Section>
);

export default FeaturedDestinations;

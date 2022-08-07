/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Logo } from '../svgs';

const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Wildlife', 'Sight-seeing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Destination', href: '#', current: false },
  { name: 'Tours', href: '#', current: false },
  { name: 'About us', href: '/about', current: false },
  { name: 'Contact us', href: '/contact', current: false },  
  { name: 'Book Now', href: '#', current: true }
];

function classNames(...classNamees:any) {
  return classNamees.filter(Boolean).join(' ');
}

const Hero = () => (
  <>
    

    		<div className="w-full h-75 bg-blue-600">

			<div className="w-full h-full relative flex items-center justify-center py-44">

				<img aria-label="no idea" src="/native/cleanlake.jpg" className="absolute object-cover w-full h-full"/>

				<div className="px-6 max-w-4xl relative z-10 text-center">
					<h1 className="text-3xl md:text-4xl font-black text-[#02044A] leading-tight mb-2">Explore Kisumu Dala</h1>
				</div>

			</div>

		</div>


  </>
);

export { Hero };

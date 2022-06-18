/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Logo } from '../../svgs';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/' },
  { name: 'About', path: '/' },
  { name: 'Partner', path: '/' },
];

const Header = () => (
  <header className="h-100 sticky top-0 flex items-center space-between">
    <Logo size={50} />
    <div className="flex ml-5  bg-blue-800 items-center">
      {links.map(({ name, path }, index) => (
        <p className="font-semibold text-md mr-20 cursor-pointer" key={index}>
          {name}
        </p>
      ))}
      <button className="h-10 w-12 mr-15">Login</button>
      <button className="bg-orange-700 h-8 w-16">Register</button>
    </div>
  </header>
);

export default Header;

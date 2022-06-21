/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
  YouTube,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Logo,
} from '../../svgs';

const destinations = ['Ndere Island', 'Impala Sanctuary', 'Dunga Bay', 'Kisumu Museum', 'Kit Mikayi'];
const shop = [
  'Destination Guides',
  'Special Offers',
  'FAQs',
];
const interests = [
  'Adventure Travel',
  'Art and Culture',
  'Wildlife And Nature',
  'Family holidays',
  'Food and drink',
];

const socialLinks = [
  <Twitter size={20} />,
  <Facebook size={9} />,
  <Instagram size={18} />,
  <LinkedIn size={20} />,
  <YouTube size={22} />,
];

const Footer = () => (
  <footer className="max-w-7xl bg-blue-800 mx-auto p-12">
    <div className="row flex flex-wrap p-12">
      <div className="wrapper px-2">
        <div className="section ">
          <img src="/logo-white.svg" className="object-contain w-1/4"/>
          <p className="advice p-2 mt-4 items-start text-xl font-semibold">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="text m-12">
            &copy;2022 Port Florence Lake Tours.
          </p>
        </div>
      </div>
      <div className="wrapper pr-10">
        <div className="section mb-3 ">
          <p className="label mb-2">Links</p>
          {destinations.map((link, index) => (
            <p className="link cursor-pointer mb-1" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
      <div className="wrapper pr-10">
        <div className="section mb-3 max-w-xl">
          <p className="label mb-2">Support</p>
          {shop.map((link, index) => (
            <p className="link cursor-pointer mb-1" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
      <div className="wrapper pr-10">
        <div className="section mb-8 max-w-md">
          <p className="label mb-2">Links</p>
          {interests.map((link, index) => (
            <p className="link cursor-pointer mb-1" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
    </div>
    <div className="social-links flex items-center justify-center pt-5 pr-0">
      {socialLinks.map((icon, index) => (
        <div className="p-5" key={index}>
          {icon}
        </div>
      ))}
    </div>
  </footer>
);

export default Footer;

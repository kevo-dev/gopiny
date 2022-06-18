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

const destinations = ['Africa', 'Antartica', 'Asia', 'Europe', 'America'];
const shop = [
  'Destination Guides',
  'Pictorial & Gifts',
  'Special Offers',
  'Delivery times',
  'FAQs',
];
const interests = [
  'Adventure Travel',
  'Art and Custure',
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
  <footer className="max-w-7xl bg-blue-800 mx-auto">
    <div className="row flex flex-wrap pt-5">
      <div className="wrapper px-10">
        <div className="section">
          <Logo size={40} />
          <p className="advice mb-15 mt-4 items-start text-lg">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="text ">
            &copy;2020 Thousand Sunny. All rights reserved
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

/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Section } from '../layout/Section'

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
  <Section>
  <footer className=" w-full mx-auto text-white text-opacity-120 text-sm tracking-widest relative">
    <div className="flex max-w-7xl  bg-local mx-auto">
      <div className="wrapper w-1/2 pl-4">
        <div className="section bg-blur-xl">
          <img src="/logo-white.svg" className="object-contain p-2 mt-4 w-28 h-28"/>
          <p className="advice p-2 mt-4 font-semibold">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="p-2 mt-4">
            &copy;2022 Port Florence Lake Tours.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex flex-wrap mt-4">
      <div className="mx-auto">
        <div className="mb-3 ">
          <p className="text-white uppercase font-bold tracking-widest mb-6">Support</p>
          {shop.map((link, index) => (
            <p className="link cursor-pointer mb-1 text-sm" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto ">
        <div className=" mb-8 max-w-md">
          <p className=" text-white uppercase font-bold tracking-widest mb-6">Links</p>
          {interests.map((link, index) => (
            <p className="cursor-pointer mb-1 text-sm" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className="flex items-center justify-center pt-5 pr-0">
      {socialLinks.map((icon, index) => (
        <div className="p-5" key={index}>
          {icon}
        </div>
      ))}
    </div>
  </footer>
  </Section>
);

export default Footer;

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
  <footer className=" bg-blue-800 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
    <div className="flex ">
      <div className="wrapper w-1/2 px-2">
        <div className="section ">
          <img src="/logo-white.svg" className="object-contain w-20 h-20"/>
          <p className="advice p-2 mt-4 font-semibold">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="mb-2 mt-4">
            &copy;2022 Port Florence Lake Tours.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex flex-wrap">
      <div className="wrapper mx-auto">
        <div className="section mb-3 ">
          <p className="label mb-2 font-semibold">Support</p>
          {shop.map((link, index) => (
            <p className="link cursor-pointer mb-1" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
      <div className="wrapper mx-auto">
        <div className="section mb-8 max-w-md">
          <p className="label mb-2 font-semibold">Links</p>
          {interests.map((link, index) => (
            <p className="link cursor-pointer mb-1" key={index}>
              {link}
            </p>
          ))}
        </div>
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
  </Section>
);

export default Footer;

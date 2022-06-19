/* eslint-disable prettier/prettier */
import React from 'react';

import { Star, Plus, Circle } from '../../svgs';

const Testimonials = () => (
  <div className="mt-2 mr-0">
    <p className="text-2xl font-semibold">Testimonials</p>
    <div className="flex items-center space-between">
      <div className="width-1/2 pt-10">
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star size={16} color="#FFBB0C" key={index} />
            ))}
        </div>
        <p className="mt-10 mr-0 w-10/12">
          “I was not expecting this level of fun”
        </p>
        <p className="mt-4">Edward Newgate</p>
        
      </div>
      <div className="image">
        <img src="assets/images/testimonial.png" alt="" />
        <div className="circle">
          <Circle size={30} />
        </div>
        <div className="plus">
          <Plus size={30} />
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;

import Image from 'next/image';
import { Section} from '../layout/Section'

import { Circle, Plus } from '../../svgs';

const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Boat Rides', 'Island Trips', 'Bird-watching', 'Game-viewing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];

const Banner = () => (
  <Section>
  
    <div className="relative border-4 rounded-lg w/12 mx-6">
      <div className="flex mt-6 mb-24">
        <div className="flex mx-auto ">
          <select className="w-40 h-11 border-2 m-2 pt-0 pr-3 rounded-lg cursor-pointer mr-5 text-md focus:outline-black">
            <option>Location</option>
            {locations.map((location, index) => (
              <option value={location} key={index}>
                {location}
              </option>
            ))}
          </select>
          <select className="w-40 h-11 border-2 m-2 pt-0 rounded-lg cursor-pointer text-md focus:outline-black">
            <option>Activity</option>
            {activities.map((activity, index) => (
              <option value={activity} key={index}>
                {activity}
              </option>
            ))}
          </select>
        </div>

      </div>
      <button className="inline-block w-full md:w-3/12 bg-blue-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">Explore</button>
    
    
  </div>
  </Section>
);

export default Banner;

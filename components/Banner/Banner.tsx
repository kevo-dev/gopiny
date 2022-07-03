import Image from 'next/image';
import { Section} from '../layout/Section'

import { Circle, Plus } from '../../svgs';

const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Boat Rides', 'Island Trips', 'Bird-watching', 'Game-viewing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];

const Banner = () => (
  <Section>
  <div className="flex w-full mx-8 border-2 rounded-lg ">
    <div className="relative w/12 mx-auto">
      <p className="font-display font-bold text-4xl mb-6">Explore Kisumu</p>
      <p className="font-light text-gray-600 mb-6 leading-relaxed">Package finder</p>
      <div className="w-8 h-1 bg-purple-800 mt-4 mr-0 ml-6" />
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
      <button className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">Explore</button>
    </div>
    <div className="bg-black w-1/2 ml-40 hidden lg:block">
    <Image
    src="/lotter/82445-travelers-walking-using-travelrmap-application.gif" 
    alt="Vercel Logo" 
    width={550}
    height={550}
    objectFit="contain" 
    />
    </div>
  </div>
  </Section>
);

export default Banner;

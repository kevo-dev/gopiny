import Image from 'next/image';

import { Circle, Plus } from '../../svgs';

const locations = ['Geneva', 'Milan', 'Paris'];
const activities = ['Travelling', 'Swimming', 'Outdoor games'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];

const Banner = () => (
  <div className="flex items-center h-screen">
    <div className="w-1/2 relative">
      <div className="circle-1">
        <Circle size={20} />
      </div>
      <div className="circle-2">
        <Circle size={20} />
      </div>
      <div className="plus">
        <Plus size={20} />
      </div>
      <p className="text-4xl font-bold text-purple-800 mt-10 mb-20 ml-4">Explore</p>
      <p className="text-2xl text-purple-800 ml-4">Holiday finder</p>
      <div className="w-25 h-2 bg-purple-800 mt-2 mr-0 " />
      <div className="mt-3">
        <div className="flex">
          <select className="w-30 h-10 m-2 pr-1 border-2 rounded-lg">
            <option>Location</option>
            {locations.map((location, index) => (
              <option value={location} key={index}>
                {location}
              </option>
            ))}
          </select>
          <select className="w-60 h-11 m-2 pr-1 border-2 rounded-lg">
            <option>Activity</option>
            {activities.map((activity, index) => (
              <option value={activity} key={index}>
                {activity}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <select className="w-20 h-10 m-2 border-2 rounded-lg">
            <option>Grade</option>
            {grades.map((grade, index) => (
              <option value={grade} key={index}>
                {grade}
              </option>
            ))}
          </select>
          <select className="w-20 h-10 m-2 border-2 rounded-lg">
            <option>Regions</option>
            {regions.map((region, index) => (
              <option value={region} key={index}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="bg-orange-500 h-10 w-30 p-2 m-4 border-2 rounded-lg">Explore</button>
    </div>
    <Image
    src="/images/banner.png" 
    alt="Vercel Logo" 
    width={550}
    height={550} 
    className="object-fill w-1/2"
    />
  </div>
);

export default Banner;

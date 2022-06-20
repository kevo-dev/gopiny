/* eslint-disable prettier/prettier */
import React from 'react';

const stories = [
  {
    title: 'The many benefits of taking a healing holiday',
    description:
      '‘Healing holidays’ are on the rise to help maximise your health and happines...',
    image: '/images/story-1.jpg',
  },
  {
    title: "3 Kenyan Luxury Hotels Ranked Among World's Most Unique Lodges",
    description:
      'From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...',
    image: '/images/story-2.jpg',
  },
  {
    title: 'Solo-holidays-double-following-pandemic-women-opt-travel-alone',
    description:
      'It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...',
    image: '/images/story-3.jpg',
  },
  {
    title: 'Adventure; a tourism product offers options beyond wildlife ',
    description:
      'Tourists- both local and international, are looking for new experiences and more value for their money.  Adventure tourism is one of the fastest growing products and sector players are building synergies to promote the product.',
    image: '/images/story-4.jpg',
  },
];

const Trending = () => (
  <div className="mx-auto">
    <p className="relative text-2xl font-semibold">Trending stories</p>
    <div className="flex flex-wrap">
      {stories.map(({ title, description, image }, index) => (
        <div className="p-10 mt-5 mr-auto" key={index}>
          <div className="story w-60 bg-purple  mx-auto">
            <img src={image} alt={title} className="object-cover h-full w-full" />
            <div className=" relative">
              <p className="label text-xl mt-2">{title}</p>
              <p className="description text-md mt-1 text-gray-800">
                {description}
              </p>
              <p className="link mt-20 text-orange-800">Read more</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Trending;

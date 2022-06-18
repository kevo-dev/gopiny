/* eslint-disable prettier/prettier */
import React from 'react';

const stories = [
  {
    title: 'The many benefits of taking a healing holiday',
    description:
      '‘Healing holidays’ are on the rise to help maximise your health and happines...',
    image: '/assets/images/story-1.jpg',
  },
  {
    title: 'The best Kyoto restaurant to try Japanese food',
    description:
      'From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...',
    image: '/assets/images/story-2.jpg',
  },
  {
    title: 'Skip Chichen Itza and head to this remote Yucatan',
    description:
      'It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...',
    image: '/assets/images/story-3.jpg',
  },
  {
    title: 'Surf’s up at these beginner spots around the world',
    description:
      'If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...',
    image: 'assets/images/story-4.jpg',
  },
];

const Trending = () => (
  <div className="mt-6 mr-0">
    <p className="text-2xl font-semibold">Trending stories</p>
    <div className="flex flex-wrap">
      {stories.map(({ title, description, image }, index) => (
        <div className="p-10 mt-5 mr-auto" key={index}>
          <div className="story w-60 bg-purple">
            <img src={image} alt={title} className="w-full object-cover" />
            <div className="pr-10">
              <p className="label text-xl mt-2">{title}</p>
              <p className="description text-md mt-1 text-gray-800 h-12">
                {description}
              </p>
              <p className="link text-orange-800">Read more</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Trending;

/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import { Section } from './layout/Section';


export const PeopleReview = (_props: any) => {
  const dataReview = [
    {
      image_url: '/images/client3.jpg',
      name: 'Allison',
    },
    {
      image_url: '/images/client2.jpg',
      name: 'Kattie',
    },
    {
      image_url: '/images/client5.jpg',
      name: 'Letty',
    },
    {
      image_url: '/images/client3.jpg',
      name: 'Letty',
    },
    {
      image_url: '/images/client5.jpg',
      name: 'Letty',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <Section
    title="What they are saying"
    description="Client reviews"
    
    >
      
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          infinite={true}
          containerClass=""
          dotListClass="custom-dot-list-style"
          itemClass=""
        >
          {dataReview.map((item, _key) => (
            <div className="bg-white rounded-lg px-20">
              <p className="leading-relaxed italic font-thin text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.”
              </p>
              <div className="mt-2">
                <div className="flex items-center">
                  <img
                    src={item.image_url}
                    alt=""
                    className="h-20 w-20 rounded-xl p-2 object-cover"
                  />
                  <h4 className="ml-5">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      
    </Section>
  );
};

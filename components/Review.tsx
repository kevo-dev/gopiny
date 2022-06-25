/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import { Section } from './layout/Section';


export const PeopleReview = (_props: any) => {
  const dataReview = [
    {
      image_url: '/assets/images/allison.jpg',
      name: 'Allison',
    },
    {
      image_url: 'assets/images/allson.jpg',
      name: 'Kattie',
    },
    {
      image_url: 'assets/images/letty.jpg',
      name: 'Letty',
    },
    {
      image_url: 'assets/images/lettty.jpg',
      name: 'Letty',
    },
    {
      image_url: 'assets/images/katie.jpg',
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
      breakpoint: { max: 500, min: 500 },
      items: 1,
    },
  };

  return (
    <Section
    title="What they are saying"
    description="Client reviews"
    
    >
      <div className="mt-20">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          infinite={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="pr-8"
        >
          {dataReview.map((item, _key) => (
            <div className="bg-white p-6 rounded-lg">
              <p className="leading-relaxed italic font-bold text-xl">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.”
              </p>
              <div className="mt-2">
                <div className="flex items-center">
                  <img
                    src={item.image_url}
                    alt=""
                    className="h-20 w-20 object-cover"
                  />
                  <h4 className="ml-5">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

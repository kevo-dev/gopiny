/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import Carousel from "react-multi-carousel";
import { Star, Plus, Circle } from "../svgs";
import { NewspaperIcon, StarIcon, ThumbUpIcon } from "@heroicons/react/outline";

import "react-multi-carousel/lib/styles.css";
import { Section } from "./layout/Section";

export const HeroSlide = (_props: any) => {
  const heroData = [
    {
      image_url: "/native/boatride1.jpg",
      name: "Boat Rides",
    },
    {
      image_url: "/native/dungabaych.jpg",
      name: "Fishing",
    },
    {
      image_url: "/native/ndere-1.jpg",
      name: "Island Trips",
    },
    {
      image_url: "/native/impalasanct.jpg",
      name: "Game-Viewing",
    },
    {
      image_url: "/native/beaubirds.jpg",
      name: "Bird-Viewing",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <Section>
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
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {heroData.map((item, _key) => (
          <div className="h-60">
            <img
              key={item.name}
              src={item.image_url}
              alt=""
              className=" w-screen mx-auto object-cover brightness-50"
            />
            
          </div>
        ))}
      </Carousel>
    </Section>
  );
};

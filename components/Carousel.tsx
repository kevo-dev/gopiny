
import Carousel from 'react-multi-carousel';



export const Carousel1 = (_props: any) => {
  const mainImgs = [
    {
      image_url: '/hero/heros (1).jpg',
      name: 'Boat-rides',
      description: `Feel the adrenaline rush as the wobbles beneath your feet.`,
    },
    {
      image_url: 'native/kisumu-museum.jpg',
      name: 'Culture',
      description: `Take a peek into the history and culture of the Lakeside people.`,
    },
    {
      image_url: '/native/ndere-1.jpg',
      name: 'Island trips',
      description: `Take a three hours cruise to one of Africa's tropical islands.`,
    },
    {
      image_url: '/hero/heros (6).jpg',
      name: 'Bird watchers paradise',      
      description: `Get thrilled by hundreds of indigenous African bird species`,
    },
    {
      image_url: '/hero/heros (2).jpg',
      name: 'Game Viewing',   
      description: `Hippos, Lions, Cheetahs Impalas, Ostriches, Zebras, Monkeys`,
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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (   
    
      
        <Carousel
          responsive={responsive}
        
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          infinite={true}
          
          dotListClass=""
          itemClass="text-center"
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={false}
          className="bg-black text-center mx-auto"
          containerClass="max-w-7xl "
          rewindWithAnimation={true}
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
                   
        >
          {mainImgs.map((item, _key) => (
            <div className="">
             
              <img
                src={item.image_url}
                alt=""
                className="block h-80 w-full object-cover"
               />
              <div className="absolute -my-40 lg:top-72  " >
                <h4 className="text-4xl text-white font-semibold lg:text-6xl ">{item.name}</h4>
              
              <p className=" leading-relaxed text-2xl font-bold text-white text-lg pt-6 lg:text-4xl">
                  {item.description}
              </p>
              </div>
              
            </div>
              
            
          ))}
        </Carousel>
      
  );
};